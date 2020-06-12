import { Component, OnInit, Input } from '@angular/core';
import { MenuList, Menu } from 'src/app/models/model_menu';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMenuList } from '../../service/service.menulist';

@Component({
  selector: 'app-search-information',
  templateUrl: './search-information.component.html',
  styleUrls: ['./search-information.component.css']
})

export class SearchInformationComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename

  public list: Menu[];
  page: Number = 1;

  constructor(private _menuservice: GetMenuList, private _router: Router) { }

  ngOnInit() {
    this._menuservice.GetMenuList().subscribe(
      res => {
        this.list = res.menu;
      }
    );
  }

  Onlist(menu) {
    this.list = menu;
    this.page = 1;
  }

  CreateBill() {
    this._router.navigate(['order']);
  }

  BillOrder() {
    this._router.navigate(['billorder']);
  }
}

