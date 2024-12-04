import { Events } from 'ionic-angular';
import { Observable } from "rxjs/Rx";
import { GetRequest, GetResponse, Filter, Sort } from '../../api/api';

import { IBaseService } from '../../data/interface/ibase-service';

export class ListPage<T> {
    public start: number = 0;
    public total: number = 0;
    public limit: number = 20;

    public items: T[];

    public filterValue: string = '';
    public filterColumns: string[] = [];

    public defaultFilters: Filter[] = [];
    public defaultSorts: Sort[] = [];

    public loading: boolean;
    public data: Observable<GetResponse<T>>;

    constructor(public service: IBaseService<T>, public events: Events) {
    }


    ionViewWillEnter() {
        let me = this;
        me.resetValues();
        me.loadData().subscribe(()=> {});
    }

    resetValues() {
        let me = this;

        me.total = 0;
        me.start = 0;
        me.items = [];
    }

    loadData() : Observable<GetResponse<T>> {
        let me = this,
            filters = me.defaultFilters,
            filterValue = me.filterValue,
            filterColumns = me.filterColumns;

        me.loading = true;

        var finalFilter = [];
        
        for (var i in filters) {
            finalFilter.push(filters[i]);
        }

        if (filterValue != '' && filterColumns.length > 0) {
            finalFilter.push(new Filter({
                c: filterColumns.join('|^|'),
                v: me.filterValue
            }));
        }

        return me.service.get(new GetRequest({
            page: 1,
            start: me.start,
            limit: me.limit,
            filter: finalFilter,
            sort: me.defaultSorts
        }))
        .do((result) => {  
            me.loading = false;
            me.total = result.total;

            me.events.publish('dosideeffect', result);

            result.data.forEach(item => { 
                me.items.push(item);
            });
        }, err => {
            me.loading = false;
        });
    }
    
    filterList(ev) {
        let me = this,
            value = ev.target.value;

        if (value && value.trim() !== '') {
            me.filterValue = value;
        } else {
            me.filterValue = '';
        }

        me.resetValues();
        me.loadData().subscribe(()=> {});
    }

    doInfinite(infiniteScroll:any) {
        let me = this;

        if (me.total >= (me.start + 20)) {
            me.start += 20;

            me.loadData().subscribe(()=> {
                infiniteScroll.complete();
            });
        } else {
            infiniteScroll.complete();
            infiniteScroll.enable(false);
        }
    }
}