import { MenuList } from '../models/model_menu';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetMenuList {

    constructor(private http: HttpClient) {
    }

    GetMenuList(): Observable<MenuList> {
        return this.http.get<MenuList>('http://localhost:8080/api/resteurant/menu/getlistmenu');
    }

    GetMenuListByKeyword(keyword: String): Observable<MenuList> {
        return this.http.get<MenuList>('http://localhost:8080/api/resteurant/menu/getlistmenu/keyword/' + keyword);
    }

}

