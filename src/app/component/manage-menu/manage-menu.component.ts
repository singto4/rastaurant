import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetMenuList } from '../../service/service.menulist';
import { Menu } from 'src/app/models/model_menu';
import { MatDialog } from '@angular/material';
import { DialogUpdateMenuComponent } from '../dialog-update-menu/dialog-update-menu.component';
import { DialogAddMenuComponent } from '../dialog-add-menu/dialog-add-menu.component';
import { ShareService } from '../../service/service.share';
import { LoginComponent } from '../login/login.component';
import { DialogSessionTimeoutComponent } from '../../component/dialog-session-timeout/dialog-session-timeout.component';

@Component({
  selector: 'app-manage-menu',
  templateUrl: './manage-menu.component.html',
  styleUrls: ['./manage-menu.component.css']
})
export class ManageMenuComponent implements OnInit {

  public list: Menu[];
  public page: Number = 1;

  constructor(
    private _router: Router,
    private _menuservice: GetMenuList,
    private _dialog: MatDialog,
    private _shareservice: ShareService
  ) { }

  ngOnInit() {

    if (localStorage.getItem('token') === null || localStorage.getItem('token') === '' || localStorage.getItem('token') === undefined) {

      const dialogSession_Timeout = this._dialog.open(DialogSessionTimeoutComponent);
      dialogSession_Timeout.afterClosed().subscribe(result => {

        const dialogRef = this._dialog.open(LoginComponent);

        this._shareservice.dialog_service_login = dialogRef;

        dialogRef.afterClosed().subscribe(() => {
          this._router.navigate(['menu']);
        });
      });

    } else {

      this._menuservice.GetMenuList().subscribe(
        res => {
          this.list = res.menu;
          this.page = 1;
        }
      );
    }
  }

  onClickBack() {
    this._router.navigate(['menu']);
  }

  deleteMenuById(id) {
    this._menuservice.deleteMenuById(id).subscribe(
      res => {
        if (res.header.status === 'Unsuccess') {
          console.log('1');
          const dialogSession_Timeout = this._dialog.open(DialogSessionTimeoutComponent);
          console.log('2');
          dialogSession_Timeout.afterClosed().subscribe(() => {
            const dialogRef = this._dialog.open(LoginComponent);

            this._shareservice.dialog_service_login = dialogRef;
            // tslint:disable-next-line: no-shadowed-variable
            dialogRef.afterClosed().subscribe(res => {

              if (res === '') {

                this._shareservice.setToken(null);
                localStorage.removeItem('token');
                this._router.navigate(['menu']);

              } else {

                 location.reload();

              }
            });
          });

        } else {
          alert(res.header.status);
          location.reload();
        }
      }
    );
  }

  updateMenuById(menu) {
    this._shareservice.menu = menu;

    const dialogRef = this._dialog.open(DialogUpdateMenuComponent, {
      width: '550px', height: '620px'
    });

    this._shareservice.dialog_service_updateMenu = dialogRef;

    dialogRef.afterClosed().subscribe(result => {

      if (result === 'Success') {

        location.reload();

      } else if (result === undefined) {

      } else {

        const dialogSession_Timeout = this._dialog.open(DialogSessionTimeoutComponent);

        dialogSession_Timeout.afterClosed().subscribe(() => {

          // tslint:disable-next-line: no-shadowed-variable
          const dialogRef = this._dialog.open(LoginComponent);

          this._shareservice.dialog_service_login = dialogRef;
          // tslint:disable-next-line: no-shadowed-variable
          dialogRef.afterClosed().subscribe(res => {

            alert(res);
            if (res === '') {

              this._shareservice.setToken(null);
              localStorage.removeItem('token');
              this._router.navigate(['menu']);

            } else {

              location.reload();

            }
          });
        });
      }
      console.log('The dialog was closed');
    });
  }

  addMenu() {
    const dialogRef = this._dialog.open(DialogAddMenuComponent, {
       width: '550px', height: '620px'
    });

    this._shareservice.dialog_service_addMenu = dialogRef;

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === 'Success') {

        location.reload();

      } else if (result === undefined || !result) {

      } else {

        const dialogSession_Timeout = this._dialog.open(DialogSessionTimeoutComponent);

        dialogSession_Timeout.afterClosed().subscribe(() => {

          // tslint:disable-next-line: no-shadowed-variable
          const dialogRef = this._dialog.open(LoginComponent);

          this._shareservice.dialog_service_login = dialogRef;
          // tslint:disable-next-line: no-shadowed-variable
          dialogRef.afterClosed().subscribe(res => {

            if (res === '') {

              this._shareservice.setToken(null);
              localStorage.removeItem('token');
              this._router.navigate(['menu']);

            } else {

              location.reload();

            }
          });
        });
      }
      console.log('The dialog was closed');
    });
  }
}


