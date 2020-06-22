import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill, BillList } from '../../models/model_bill';
import { ServiceOrder } from '../../service/service.order';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { DialogSessionTimeoutComponent } from '../../component/dialog-session-timeout/dialog-session-timeout.component';
import { ShareService } from '../../service/service.share';

@Component({
  selector: 'app-bill-order',
  templateUrl: './bill-order.component.html',
  styleUrls: ['./bill-order.component.css']
})
export class BillOrderComponent implements OnInit {

  public Listbill: Bill[];
  public total;
  public page: Number = 1;

  constructor(
    private _router: Router,
    private _serviceorder: ServiceOrder,
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
          location.reload();
        });
      });
    }
  }

  onClickBack() {
    this._router.navigate(['menu']);
  }

  GetBillOrder(data) {

    if (data.billnunmber !== '') {

      this._serviceorder.GetOrderByBill(data.billnunmber).subscribe(
        res => {

          if (res.header.status === 'Unsuccess') {

            const dialogSession_Timeout = this._dialog.open(DialogSessionTimeoutComponent);

            dialogSession_Timeout.afterClosed().subscribe( () => {
              const dialogRef = this._dialog.open(LoginComponent);

              this._shareservice.dialog_service_login = dialogRef;

              dialogRef.afterClosed().subscribe(() => {
                location.reload();
              });
            });

          } else {

            this.Listbill = res.body.bill;
            this.page = 1;
            this.TotalPrice();

          }
        }
      );

    } else {

      this.Listbill = [];
      this.total = '';

    }
  }

  TotalPrice() {

    this.total = 0;
    this.Listbill.forEach( value => {

      this.total = this.total + value.total;

    });
  }

  onClickToBillStatus() {
    this._router.navigate(['billstatus']);
  }
}
