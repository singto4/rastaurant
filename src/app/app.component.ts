import { Component, OnInit } from '@angular/core';
import { GetMenuList } from './service/service.menulist';
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

  ngOnInit() {

  }
}
