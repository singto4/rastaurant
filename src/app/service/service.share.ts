import { Injectable } from '@angular/core';
import { LoginComponent } from '../component/login/login.component';
import { MatDialogRef } from '@angular/material';
import { ReplaySubject, Observable } from 'rxjs';
import { Menu } from 'src/app/models/model_menu';
import { DialogUpdateMenuComponent } from '../component/dialog-update-menu/dialog-update-menu.component';
import { DialogAddMenuComponent } from '../component/dialog-add-menu/dialog-add-menu.component';


@Injectable()
export class ShareService {
    public map_order: Map<String, any>;
    public dialog_service_login: MatDialogRef<LoginComponent, any>;
    public dialog_service_updateMenu: MatDialogRef<DialogUpdateMenuComponent, any>;
    public dialog_service_addMenu: MatDialogRef<DialogAddMenuComponent, any>;
    public tokenValue: string;
    public token: ReplaySubject<string> = new ReplaySubject<string>(1);

    public menu: Menu;

    observableToken(): Observable<string> {
        return this.token.asObservable();
    }

    getToken() {
        return this.tokenValue;
    }

    setToken(tokenValue: string) {
        this.tokenValue = tokenValue;
        this.token.next(tokenValue);
    }



}
