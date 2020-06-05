import { Component, OnInit, Input } from '@angular/core';
import { GetMenuList } from '../../service/menulist';
import { MenuList, Menu } from 'src/app/models/model_menu';

@Component({
  selector: 'app-search-information',
  templateUrl: './search-information.component.html',
  styleUrls: ['./search-information.component.css']
})
export class SearchInformationComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('list') list: Menu[];

  // public list: Menu[];

  // constructor(private _menuservice: GetMenuList) {}

  // ngOnInit(){
  //   const resp = this._menuservice.GetMenuList().subscribe(
  //     res => {
  //       this.list = res.menu;
  //       this.flag = true;
  //     }
  //   )
  // }

  constructor() {}
  ngOnInit() {

  }
}

