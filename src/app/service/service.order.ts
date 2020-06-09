import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/model_order';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceOrder {

    constructor(private http: HttpClient) {
    }

    

    addOrder(data: Array<Object>) {

        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
       return this.http.post('http://localhost:8080/api/resteurant/order/addorder', JSON.stringify(data), httpOptions);
    }
}