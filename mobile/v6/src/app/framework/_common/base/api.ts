export class Filter {
    constructor(fields?: { c?: string, v?: any, cj?:string, g?:string}) {
        if (fields) Object.assign(this, fields);
    }

    //[{"c":"intEntityUserSecurityId","v":1,"cj":"or","g":"g0"}]

    public c: string;
    public v: any;    
    public cj: string;
    public g: string;
}

export class Sort {
    constructor(fields?: { property?: string, direction?:string}) {
        if (fields) Object.assign(this, fields);
    }

    public property: string;
    public direction: string;
}

export class GetRequest {
    constructor(fields?: { page?: number, start?: number, limit?: number, columns?:string, filter?:Filter[], sort?:Sort[] }) {
        let me = this;
        me.page = 1;
        me.start = 0;
        me.limit = 1;

        me.filter = [];
        me.sort = [];

        if (fields) Object.assign(me, fields);
    }

    public page?: number;
    public start?: number;
    public limit?: number;
    public columns: string;
    public filter: Filter[];
    public sort: Sort[];
}

export class GetResponse<T> {
    public data: [T];
    public success: boolean;
    public total: number;
}

export class PostResponse<T> {
    public data: [T];
    public success: boolean;
    public message: any; //TODO: Correct this
}