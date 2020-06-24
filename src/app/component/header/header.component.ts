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
  public tokenValue: string;

  constructor(private _dialog: MatDialog, private _router: Router, private _shareservice: ShareService) { }

  ngOnInit() {
    this._shareservice.setToken(localStorage.getItem('token'));
    this.tokenValue = this._shareservice.getToken();

    this._shareservice.observableToken().subscribe(
      (token: string) => {
        this.tokenValue = token;
      }
    );
  }

  Login() {

    const dialogRef = this._dialog.open(LoginComponent);

    this._shareservice.dialog_service_login = dialogRef;

    dialogRef.afterClosed().subscribe(result => {
      // this._shareservice.observableToken().subscribe(
      //   (data: string) => {
      //     this.tokenValue = data;
      //   }
      // );
    });
  }

  Logout() {
    this._shareservice.setToken(null);
    localStorage.removeItem('token');
    this.tokenValue = this._shareservice.getToken();
    this._router.navigate(['menu']);
  }
}
