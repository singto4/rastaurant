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
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

       return this.http.post('http://localhost:8080/api/resteurant/order/addorder', JSON.stringify(data), httpOptions);
    }

    GetOrderByBill(bill: number): Observable<Response> {
        return this.http.get<Response>('http://localhost:8080/api/resteurant/order/getbill/' + bill);
    }

    GetBillStatus(): Observable<Response> {
        return this.http.get<Response>('http://localhost:8080/api/resteurant/order/getbillstatus');
    }

    UpdateBilllStatus(id: Number) {

        return this.http.post('http://localhost:8080/api/resteurant/order/updatebillstatus', id);
    }
}
