import { Component, OnInit } from '@angular/core';
import { ShareService} from '../../service/service.share';
import { Menu } from 'src/app/models/model_menu';
import { GetMenuList } from '../../service/service.menulist';
import { ServiceOrder } from '../../service/service.order';
import { Order } from 'src/app/models/model_order';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../component/dialog/dialog.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  list: Menu[];
  map = new Map<String, any>();

  arr: Array<Object> = [];

  constructor
  (
    private _shareservice: ShareService,
    private _getmenulist: GetMenuList,
    private _orderservice: ServiceOrder,
    private _router: Router,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {

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
  }
}
