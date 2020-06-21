import { MenuList, Menu } from '../models/model_menu';
import { Response } from '../models/model_response';
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

    deleteMenuById(id: number) {
        return this.http.delete<Response>('http://localhost:8080/api/resteurant/menu/deletemenu/' + id);
    }

    updateMenuById(menu: Menu) {
        return this.http.put<Response>('http://localhost:8080/api/resteurant/menu/updatemenu', menu);
    }

    addMenu(menu: Menu) {
        return this.http.post<Response>('http://localhost:8080/api/resteurant/menu/createmenu', menu);
    }
}

