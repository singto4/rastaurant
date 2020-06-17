import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from '../../service/service.share';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _shareservice: ShareService) { }

  ngOnInit() {
  }

  onClick(data) {
    console.log(data.username);
    console.log(data.password);

    if (data.username === 'admin' && data.password === 'admin') {

      this._shareservice.button_login = false;
      this._shareservice.button = true;
      this._shareservice.dialog_service.close();
      // location


    } else {
      console.log('kak');
    }



  }

}
