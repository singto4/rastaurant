import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/model_login';
import { Response } from '../models/model_response';

@Injectable()
export class ServiceLogin {

    constructor(private http: HttpClient) {
    }

    login(data): Observable<Response> {
        return this.http.post<Response>('http://localhost:8080/api/resteurant/user/login', data);
    }
}
