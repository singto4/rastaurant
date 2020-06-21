import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetMenuList } from '../../service/service.menulist';
import { Menu } from 'src/app/models/model_menu';
import { MatDialog } from '@angular/material';
import { DialogUpdateMenuComponent } from '../dialog-update-menu/dialog-update-menu.component';
import { DialogAddMenuComponent } from '../dialog-add-menu/dialog-add-menu.component';
import { ShareService } from '../../service/service.share';


@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.css']
})
export class ManageMenuComponent implements OnInit {

  public list: Menu[];

  constructor(
    private _router: Router,
    private _menuservice: GetMenuList,
    private _dialog: MatDialog,
    private _shareservice: ShareService
  ) { }

  ngOnInit() {
    this._menuservice.GetMenuList().subscribe(
      res => {
        this.list = res.menu;
      }
    );
  }

  onClickBack() {
    this._router.navigate(['menu']);
  }

  deleteMenuById(id) {
    this._menuservice.deleteMenuById(id).subscribe(
      res => {
        alert(res.header.status);
      }
    );

    location.reload();
  }

  updateMenuById(menu) {
    this._shareservice.menu = menu;

    const dialogRef = this._dialog.open(DialogUpdateMenuComponent, {
      width: '40%', height: '80%'
    });

    this._shareservice.dialog_service_updateMenu = dialogRef;

    dialogRef.afterClosed().subscribe(result => {

      if (result === 'Success') {
        location.reload();
      }
      console.log('The dialog was closed');
    });
  }

  addMenu() {
    const dialogRef = this._dialog.open(DialogAddMenuComponent, {
      width: '40%', height: '80%'
    });

    this._shareservice.dialog_service_addMenu = dialogRef;

    dialogRef.afterClosed().subscribe(result => {

      if (result === 'Success') {
        location.reload();
      }
      console.log('The dialog was closed');
    });
  }

}
