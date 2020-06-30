import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../../service/service.share';
import { ServiceLogin } from '../../service/service.login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;

  constructor(private _router: Router, private _shareservice: ShareService, private _servicelogin: ServiceLogin) { }

  ngOnInit() {
  }

  onClick(data) {

    if (data.username !== '' && data.password !== '') {

      this._servicelogin.login(data).subscribe(
        res => {

          if (res.header.status === 'Success' && res.body.token !== '') {

            localStorage.setItem('token', res.body.token);

            this._shareservice.setToken(res.body.token);

            this._shareservice.observableToken().subscribe(
              // tslint:disable-next-line: no-shadowed-variable
              (data: string) => {
                this.token = data;
              }
            );

            this._shareservice.dialog_service_login.close(res.body.status);

          } else {

            this._shareservice.dialog_service_login.close();
            alert(res.header.errormessage);
          }

        }
      );

    } else {
      alert('กรุณากรอก Username และ Password');
    }



  }

}
