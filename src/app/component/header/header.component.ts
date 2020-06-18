import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { ShareService } from '../../service/service.share';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public button_login: boolean;

  constructor(private _dialog: MatDialog, private _router: Router, private _shareservice: ShareService) { }

  ngOnInit() {
     this.button_login = this._shareservice.button_login;
  }

  Login() {

    const dialogRef = this._dialog.open(LoginComponent);
    this._shareservice.dialog_service = dialogRef;

    dialogRef.afterClosed().subscribe(result => {
        this.button_login = this._shareservice.button_login;

    });

  }
}
