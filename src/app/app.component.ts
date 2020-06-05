import { Component, OnInit } from '@angular/core';
import { GetMenuList } from './service/menulist';
import { Menu } from './models/model_menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'restaurant';
  public list: Menu[];

  constructor(private _menuservice: GetMenuList) {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    const resp = this._menuservice.GetMenuList().subscribe(
      res => {
        this.list = res.menu;
      }
    );
  }

  Onlist(menu){
    this.list = menu;
  }
}
