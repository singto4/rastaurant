import { MenuList, Menu } from '../models/model_menu';
import { Response } from '../models/model_response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GetMenuList {

    constructor(private http: HttpClient) {
    }

    GetMenuList(): Observable<MenuList> {
        return this.http.get<MenuList>('/web/api/resteurant/menu/getlistmenu');
    }

    GetMenuListByKeyword(keyword: String): Observable<MenuList> {
        return this.http.get<MenuList>('/web/api/resteurant/menu/getlistmenu/keyword/' + keyword);
    }

    deleteMenuById(id: number) {

        const httpOptions = {
            headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
        };

        return this.http.delete<Response>('/web/api/resteurant/menu/deletemenu/' + id, httpOptions);
    }

    updateMenuById(menu: Menu) {

        const httpOptions = {
            headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
        };

        return this.http.put<Response>('/web/api/resteurant/menu/updatemenu', menu, httpOptions);
    }

    addMenu(menu: Menu) {

        const httpOptions = {
            headers: new HttpHeaders({'Authorization': localStorage.getItem('token')})
        };

        return this.http.post<Response>('/web/api/resteurant/menu/createmenu', menu, httpOptions);
    }
}

