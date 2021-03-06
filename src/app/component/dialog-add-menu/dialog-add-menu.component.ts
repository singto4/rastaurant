import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../service/service.share';
import { GetMenuList } from '../../service/service.menulist';

@Component({
  selector: 'app-dialog-add-menu',
  templateUrl: './dialog-add-menu.component.html',
  styleUrls: ['./dialog-add-menu.component.css']
})
export class DialogAddMenuComponent implements OnInit {

  constructor(
    private _menuservice: GetMenuList,
    private _shareservice: ShareService
  ) { }

  ngOnInit() {
  }

  addMenu(data) {
    this._menuservice.addMenu(data).subscribe(
      res => {
          alert(res.header.status + '\n' + res.header.errormessage);
          this._shareservice.dialog_service_addMenu.close(res.header.status);
      }
    );
  }
}
