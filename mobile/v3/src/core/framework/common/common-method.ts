import { Headers } from '@angular/http';
import { Configuration } from './configuration';

export class CommonMethod {
    
    public static getBearer() : Headers {
        var headers = new Headers();
        
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('ICompany', Configuration.Company);

        return headers;
    }
        
    public static getHeaders() : Headers {
        var headers = new Headers();
        
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `Bearer ` + Configuration.AuthToken);

        //headers.append('Authorization', `Basic ${btoa(`A:A:${Configuration.Company}:${Configuration.EntityId}:${Configuration.EntityId}`)}`);

        return headers;
    }

    public static encodeToUri(param: any): string {
        return Object.keys(param).map(function(k) {
            return `${encodeURIComponent(k)}=${(k == 'filter' || k == 'sort') ? JSON.stringify(param[k]) : encodeURIComponent(param[k])}`
        }).join('&');
    }


    public static getMapSource(address: string) : string {
        return `https://maps.googleapis.com/maps/api/staticmap?center=${address}&zoom=14&size=250x150&key=AIzaSyAAtaIJf5CK1O7EjCTIjVVu-_Fx3LCf_i0`;
    }

    public static getEntityImageSource(id?: number) {
        id = id || Configuration.EntityId;

        return `${Configuration.BaseAddress}globalcomponentengine/api/usersinfo/getuserdefaultpicture?entityId=${id}&company=${Configuration.Company}`;
    }

    public static highlightButton(menu) {
        if(document.getElementsByClassName('btnShiftPage').length > 0) {
            document.getElementsByClassName('btnDashboardPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnShiftPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnOrderPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnCustomerPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnCompletedInvoicePage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnReceivedPaymentPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnConfigurationPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnProfilePage')[0].classList.remove('menu-global-active');
            //document.getElementById('btn'+menu).classList.add('menu-global-active');
            document.getElementsByClassName('btn'+menu)[0].classList.add('menu-global-active');
        }
    }
}