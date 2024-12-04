export interface Security {
    // dtmExpires: string;
    // dtmIssued: number;
    // strToken: string;
    // strUserName: string;
    // strPassword: string;
    // access_token: string;
    expires: Date;
    issued: Date;
    access_token: string;
    expires_in: string;
    token_type: string;
    userName: string;
}