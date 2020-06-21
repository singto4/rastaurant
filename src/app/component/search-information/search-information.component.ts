import { Component, OnInit, Input } from '@angular/core';
import { MenuList, Menu } from 'src/app/models/model_menu';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMenuList } from '../../service/service.menulist';
import { ShareService } from '../../service/service.share';

@Component({
  selector: 'app-search-information',
  templateUrl: './search-information.component.html',
  styleUrls: ['./search-information.component.css']
})

export class SearchInformationComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  public tokenValue: string;
  public list: Menu[];
  page: Number = 1;

  constructor(
    private _menuservice: GetMenuList,
    private _router: Router,
    private _shareservice: ShareService,
  ) { }


  ngOnInit() {
    this._menuservice.GetMenuList().subscribe(
      res => {
        this.list = res.menu;
      }
    );

    this._shareservice.setToken(localStorage.getItem('token'));

    this._shareservice.observableToken().subscribe(
      (data: string) => {
        this.tokenValue = data;
      }
    );
    // this.tokenValue = this._shareservice.getToken();
  }

  Onlist(menu) {
    this.list = menu;
    this.page = 1;
  }

  createBill() {
    this._router.navigate(['order']);
  }

  billOrder() {
    this._router.navigate(['billorder']);
  }

  manageMenu() {
    this._router.navigate(['managemenu']);
  }
}

