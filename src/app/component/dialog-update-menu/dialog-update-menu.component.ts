import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/model_menu';
import { ShareService } from '../../service/service.share';
import { GetMenuList } from '../../service/service.menulist';

@Component({
  selector: 'app-dialog-update-menu',
  templateUrl: './dialog-update-menu.component.html',
  styleUrls: ['./dialog-update-menu.component.css']
})
export class DialogUpdateMenuComponent implements OnInit {

  menu: Menu;

  constructor(
    private _menuservice: GetMenuList,
    private _shareservice: ShareService
  ) { }

  ngOnInit() {
    this.menu = this._shareservice.menu;
  }

  updateMenuById(data) {

    this._menuservice.updateMenuById(data).subscribe(
      res => {
          alert(res.header.status);
          this._shareservice.dialog_service_updateMenu.close(res.header.status);
      }
    );
  }

}
