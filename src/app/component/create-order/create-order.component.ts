import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../service/service.share';
import { Menu } from 'src/app/models/model_menu';
import { GetMenuList } from '../../service/service.menulist';
import { ServiceOrder } from '../../service/service.order';
import { Order } from 'src/app/models/model_order';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../component/dialog/dialog.component';
import { DialogNullComponent } from '../../component/dialog-null/dialog-null.component';
import { DialogMenuNullComponent } from '../../component/dialog-menu-null/dialog-menu-null.component';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  list: Menu[];
  map = new Map<String, any>();

  arr: Array<Object> = [];
  page: Number = 1;

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';

  constructor
    (
      private _shareservice: ShareService,
      private _getmenulist: GetMenuList,
      private _orderservice: ServiceOrder,
      private _router: Router,
      private _dialog: MatDialog,
    ) { }

  ngOnInit() {

    setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(5000)).subscribe(() => this.successMessage = '');

    this._getmenulist.GetMenuList().subscribe(
      res => {
        this.list = res.menu;
      }
    );
  }


  onClickBack() {
    this._router.navigate(['menu']);
  }


  onClickAddQuantity(menu) {

    if (this.map.has(menu)) {

      let value = this.map.get(menu);
      value++;
      this.map.set(menu, value);

    } else {

      this.map.set(menu, 1);

    }
  }


  onClickReduceQuantity(menu) {
    let value = this.map.get(menu);

    if (value === 1) {

      this.map.delete(menu);

    } else {

      value--;
      this.map.set(menu, value);

    }
  }


  InsertOrder(data) {

    if ((data.bill !== '' && data.bill !== null) && this.map.size !== 0) {

      if (data.bill > 0) {

        this.map.forEach((key, value) => {

          const order = new Order();
          order.bill = data.bill;
          order.menu = value;
          order.quantity = key;

          this.arr.push(order);

        });

        this._orderservice.addOrder(this.arr).subscribe(res => {
          console.log(res);
        });

        this._shareservice.map_order = this.map;

        const dialogRef = this._dialog.open(DialogComponent, {
          width: '300px'
        });

        dialogRef.afterClosed().subscribe(result => {
          this.map.clear();
          this.arr = [];
          console.log('The dialog was closed');
        });

      } else {

        this._success.next('กรุณาใส่เลข Bill ให้ถูกต้อง');

      }

    } else if (this.map.size === 0 && (data.bill !== '' || data.bill !== null)) {

      const dialogRef = this._dialog.open(DialogMenuNullComponent, {
        width: '300px'
      });

      dialogRef.afterClosed().subscribe(result => {
        this.map.clear();
        this.arr = [];
        console.log('The dialog was closed');
      });

    } else if ((data.bill === '' || data.bill === null)) {

      const dialogRef = this._dialog.open(DialogNullComponent, {
        width: '300px'
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });

    }
  }


}
