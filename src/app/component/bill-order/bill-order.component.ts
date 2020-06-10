import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill, BillList } from '../../models/model_bill';
import { ServiceOrder } from '../../service/service.order';

@Component({
  selector: 'app-bill-order',
  templateUrl: './bill-order.component.html',
  styleUrls: ['./bill-order.component.css']
})
export class BillOrderComponent implements OnInit {

  public Listbill: Bill[];
  public total;
  public page: Number = 1;
  public totalrecords: Number;

  constructor(private _router: Router, private _serviceorder: ServiceOrder) { }



  ngOnInit() {
  }

  onClickBack() {
    this._router.navigate(['menu']);
  }

  GetBillOrder(data) {

    if (data !== '') {

      this._serviceorder.GetOrderByBill(data.bill).subscribe(
        res => {

          this.Listbill = res.bill;
          this.TotalPrice();

        }
      );

    } else {

      this._router.navigate(['billorder']);

    }
  }

  TotalPrice() {

    this.total = 0;
    this.Listbill.forEach( value => {

      this.total = this.total + value.total;

    });
  }
}
