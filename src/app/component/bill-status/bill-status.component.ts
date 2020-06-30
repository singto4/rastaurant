import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOrder } from '../../service/service.order';
import { BillStatus } from '../../models/model_billstatus';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { DialogSessionTimeoutComponent } from '../../component/dialog-session-timeout/dialog-session-timeout.component';
import { ShareService } from '../../service/service.share';

@Component({
  selector: 'app-bill-status',
  templateUrl: './bill-status.component.html',
  styleUrls: ['./bill-status.component.css']
})
export class BillStatusComponent implements OnInit {

  public listbill: BillStatus[];
  public page: Number = 1;

  constructor(
    private _router: Router,
    private _serviceorder: ServiceOrder,
    private _dialog: MatDialog,
    private _shareservice: ShareService

  ) { }

  ngOnInit() {

    if (localStorage.getItem('token') === null || localStorage.getItem('token') === '' || !localStorage.getItem('token')) {

      const dialogSession_Timeout = this._dialog.open(DialogSessionTimeoutComponent);
      dialogSession_Timeout.afterClosed().subscribe(result => {

        const dialogRef = this._dialog.open(LoginComponent);

        this._shareservice.dialog_service_login = dialogRef;

        dialogRef.afterClosed().subscribe(() => {
          this._router.navigate(['menu']);
        });
      });

    } else {

      this._serviceorder.GetBillStatus().subscribe(
        res => {

          if (res.header.status === 'Unsuccess') {

            const dialogSession_Timeout = this._dialog.open(DialogSessionTimeoutComponent);

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

            this.listbill = res.body.billstatus;
            this.page = 1;
          }
        }
      );
    }
  }

  onClickBack() {
    this._router.navigate(['billorder']);
  }

  onClickUpdateStatus(id) {
    this._serviceorder.UpdateBilllStatus(id).subscribe(
      res => {
        if (res.header.status === 'Unsuccess') {

          const dialogSession_Timeout = this._dialog.open(DialogSessionTimeoutComponent);

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
        }

        console.log(res);
      }
    );

    this.ngOnInit();
  }

}
