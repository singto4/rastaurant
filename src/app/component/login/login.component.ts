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

  constructor(private _router: Router, private _shareservice: ShareService, private _servicelogin: ServiceLogin) { }

  ngOnInit() {
  }

  onClick(data) {
    console.log(data.username);
    console.log(data.password);



    if (data.username !== '' && data.password !== '') {

      this._servicelogin.login(data).subscribe(
        res => {
          console.log(res.status);
          console.log(res.token);
          localStorage.setItem('token', res.token);
        }
      );

      this._shareservice.button_login = false;
      this._shareservice.button = true;
      this._shareservice.dialog_service.close();


    } else {
      console.log('kak');
    }



  }

}
