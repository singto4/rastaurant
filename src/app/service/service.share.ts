import { Injectable } from '@angular/core';
import { LoginComponent } from '../component/login/login.component';
import { MatDialogRef } from '@angular/material';

@Injectable()
export class ShareService {
    public map_order: Map<String, any>;
    public dialog_service: MatDialogRef<LoginComponent, any>;
    public button_login = true;
    public button = false;

}
