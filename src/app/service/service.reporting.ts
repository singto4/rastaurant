import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '../models/model_response';
import { MenuReport } from '../models/model_menu_report';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceReporting {

    constructor(private http: HttpClient) {
    }

    getBillReport(date: Date) {

        const httpOptions = {
            headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
        };

        return this.http.post<Response>('http://35.187.243.105:8089/api/resteurant/report/billreport', date, httpOptions);
    }

    getMenuReport(date: Date) {

        const httpOptions = {
            headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
        };

        return this.http.post<Response>('http://35.187.243.105:8089/api/resteurant/report/menureport', date, httpOptions);
    }

    genExcelFile(date: Date): Observable<Blob> {

        return this.http.post('http://35.187.243.105:8089/api/resteurant/report/genexcel', date,
            {
                headers: {'Authorization': localStorage.getItem('token')},
                responseType: 'blob'
            }
        );
    }

    genPdfFile1(date: Date): Observable<Blob> {

        return this.http.post('http://35.187.243.105:8089/api/resteurant/report/genpdf', date,
            {
                headers: {'Authorization': localStorage.getItem('token')},
                responseType: 'blob',
            }
        );
    }
}
