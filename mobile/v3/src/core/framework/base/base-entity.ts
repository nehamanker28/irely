export class BaseEntity {
    public intConcurrencyId: number;
    public strRowState: string;
    public strClientID: string;

    constructor() {
        this.strClientID = '1';
        this.intConcurrencyId = 1;
    }
}