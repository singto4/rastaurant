import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material';
import { ServiceReporting } from '../../service/service.reporting';
import { MenuReport } from '../../models/model_menu_report';
import { OrderReport } from '../../models/model_order_report';
import { MatDialog } from '@angular/material';
import { DialogSessionTimeoutComponent } from '../../component/dialog-session-timeout/dialog-session-timeout.component';
import { LoginComponent } from '../login/login.component';
import { ShareService } from '../../service/service.share';
import { DomSanitizer } from '@angular/platform-browser';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  // dateTime: string;
  event: MatDatepickerInputEvent<Date>;
  date_time: Date;
  total: number;

  arr: Array<OrderReport> = [];
  menuReport: MenuReport[];

  constructor(
    private _router: Router,
    private _serviceReporting: ServiceReporting,
    private _dialog: MatDialog,
    private _shareservice: ShareService,
    private sanitizer: DomSanitizer
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
    }

    this.date_time = null;
  }

  onClickBack() {
    this._router.navigate(['menu']);
  }

  onClick(event) {
    this.arr = [];
    this.date_time = event.value;
    this._serviceReporting.getBillReport(event.value).subscribe(res => {

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

        for (const key in res.body) {
          if (res.body.hasOwnProperty(key)) {
            const value = res.body[key];

            const order = new OrderReport();
            order.bill = value.bill;
            order.total = value.total;

            this.arr.push(order);
          }
        }

        this.TotalPrice();

        this._serviceReporting.getMenuReport(event.value).subscribe(data => {
          this.menuReport = data.body;
        });
      }
    });
  }

  TotalPrice() {
    this.total = 0;
    this.arr.forEach(value => {
      this.total = this.total + value.total;
    });
  }

  genExcelFile() {
    this._serviceReporting.genExcelFile(this.date_time).subscribe( res => {
      const blob = new Blob([res], { type: 'application/xlsx' });
      const fileUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'report.xlsx';
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    });
  }

  genPdfFile() {
    this._serviceReporting.genPdfFile1(this.date_time).subscribe( res => {
      const filename = 'report_' + this.date_time.getDate() + (this.date_time.getMonth() + 1) + this.date_time.getFullYear() + '.pdf';
      const blob = new Blob([res], { type: 'application/pdf' });
      const fileUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = filename;
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    });
  }
}
