import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BillList} from '../models/model_bill';
import { BillStatusList } from '../models/model_billstatus';
import { Observable } from 'rxjs';
import { Response } from '../models/model_response';


@Injectable()
export class ServiceOrder {

    constructor(private http: HttpClient) {
    }

    addOrder(data: Array<Object>) {

        const httpOptions = {
            headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
        };

       return this.http.post<Response>('/web/api/resteurant/order/addorder', data, httpOptions);
    }

    GetOrderByBill(bill: number): Observable<Response> {

        const httpOptions = {
            headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
        };

        return this.http.get<Response>('/web/api/resteurant/order/getbill/' + bill, httpOptions);
    }

    GetBillStatus(): Observable<Response> {

        const httpOptions = {
            headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
        };

        return this.http.get<Response>('/web/api/resteurant/order/getbillstatus', httpOptions);
    }

    UpdateBilllStatus(id: Number) {

        const httpOptions = {
            headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
        };

        return this.http.post<Response>('/web/api/resteurant/order/updatebillstatus', id, httpOptions);
    }
}
