import { Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavParams, Loading, Events } from 'ionic-angular';

import { IBaseService } from '../../data/interface/ibase-service';
import { BaseEntity } from '../base-entity';
import { Message } from '../../common/message';
import { PageEdit } from '../interface/page-edit';

export class FormPage<T extends BaseEntity> implements PageEdit {
    public form: FormGroup;
    public current: T;
    public loading: boolean;
    public mode: string;
    public id: number;
    public loader: Loading;

    public fb: FormBuilder;
    public events: Events;
    public message: Message;
    public navParams: NavParams;

    public submitAttempt: boolean;

    constructor(public service: IBaseService<T>, public injector: Injector) {
        let me = this;

        me.setupDependencies();

        me.mode = me.navParams.get('mode') || 'Edit';
        me.id = me.navParams.get('id');
    }

    setupDependencies() {
        let me = this,
            inj = me.injector;

        me.fb = inj.get(FormBuilder);
        me.events = inj.get(Events);
        me.message = inj.get(Message);
        me.navParams = inj.get(NavParams);
    }

    ionViewWillEnter() {
        let me = this;

        if (me.mode == 'Edit') {
            me.load();
        } else {
            me.addNew();
        }
    }

    load() {
        let me = this,
            events = me.events;

        me.service.getbyid(me.id).subscribe((result) => {
            if (result.success) {
                let current = me.current = result.data[0];
                if (current) {
                    me.form.patchValue(current);

                    events.publish('loadsuccess', current);
                }
            }
        }, (error) => {
            events.publish('loadfailed', error);
        });
    }

    addNew(value?: any) {
        let me = this;

        value = value || {};

        me.current = value;
        me.form.patchValue(value);
    }

    submit(callback?: () => void) {
        var me = this,
            current = me.current,
            form = me.form,
            valid = form.valid,
            value = form.value;

        me.submitAttempt = true;

        if(valid){
            let loader = me.loader = me.message.showLoader('Saving...');
            loader.present();

            Object.assign(current, value);

            //TODO: Look for a better way to handle this
            current.strClientID = "1";

            if (me.mode == 'New') {
                me.service.create(current).subscribe(me.submitCallback.bind(me), me.submitError);
            } else {
                me.service.save(current).subscribe(me.submitCallback.bind(me), me.submitError);
            }
        } else {
            me.events.publish('validationfailed', current);
        }
    }

    submitCallback(result) {
        let me = this,
            form = me.form,
            current = me.current,
            events = me.events,
            loader = me.loader;

        if (loader) {
            loader.dismiss();
        }

        if (result.success) {
            form.markAsPristine();

            me.message.showToast('Record has been saved successfully.', () => {});

            var serverData = <T>result.data[0];
            if (serverData) {
                Object.assign(current, serverData);

                for (let name in form.controls) {
                    let control = form.controls[name];

                    let prop = Object.keys(current).find(prop => {
                        return prop == name;
                    });
                    
                    if (prop) {
                        control.setValue(current[prop]);
                    }
                }
            }

            me.mode = 'Edit'; //Change mode to Edit from New after submit

            events.publish('submitsuccess', current);
        } else {
            events.publish('submitfailed', result);
        }
    }

    submitError(error) {
        let me = this,
            events = me.events,
            loader = me.loader;

        if (loader) {
            loader.dismiss();
        }

        events.publish('submiterror', error);
    }
}