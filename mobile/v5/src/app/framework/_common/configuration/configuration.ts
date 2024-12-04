export class Configuration {
    public static Token: string;
    public static BaseAddress = "http://192.168.2.10/iRelyi21TE"; // "http://192.168.1.6/2010proddev";  //http://192.168.1.8/2010MBIL/  //"http://74.208.186.24/MBIL/"; //http://192.168.1.6/dev2010 // http://192.168.0.24/Dev1921/"; // "http://74.208.186.24/MOB1920/"; //server connection http://qc.irely.com/MOB1830/  ++  //http://192.168.0.197/1830Dev/
    public static EntityId: number;
    public static Company: string = "TE"; //location
    public static FullName: string;
    public static IsAdmin: boolean;
    public static Rank: number;
    public static AuthToken: any; // = "pqYdMOEuvetu6BMc_Zm3E6DkbRz8RYWmRHMVvnQdX17aQ0LjpbihtetgtVAVKQboNcNkyXb2HfoR-2Unal6yUiUoXkE8-x_2_mxSOY6r3gY1" //"5B66XyeNbLycUjK2Ndybkvkem3FCxP-RQunsfT39QR7EmgXKwFO1FGeZVQ7gHocWuIA5bHAMmmLQ2cFaxMheplgU9_ROeEAg0a36zusmYB81";
    public static ApiKey: any = "AIzaSyDX4uw6XEnQ0iq4V4hR8FbTU13joMIFNIg";
    public static DefaultLocation: number;
    public static navParams: any;
    public static sqlite: any;
    public static sqliteIsOpen: boolean = false;
    public static globalFlag: boolean = false;
    public static stopReload: boolean = false;
    public static globalVariable: any;
    public static globalObject: any;

    //INVOICE GLOBAL VARIABLE
    public static InvoiceRecord: any;
    public static ItemRecord: any;
    public static CustomerRecord: any;
    public static isFromCustomer: any;
    public static isMeter: any;
    public static Site: any;
    itemTax: any;

    //INVOICE GLOBAL VARIABLE
    public static GlobalInfo: any;

    public taxes() {
        this.itemTax = [];
    }
}