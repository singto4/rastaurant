import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/model_login';

@Injectable()
export class ServiceLogin {

    constructor(private http: HttpClient) {
    }

    login(data): Observable<Login> {
        return this.http.post<Login>('http://localhost:8080/api/resteurant/user/login', data);
    }
}
