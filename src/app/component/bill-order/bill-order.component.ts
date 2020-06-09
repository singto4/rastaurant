import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-order',
  templateUrl: './bill-order.component.html',
  styleUrls: ['./bill-order.component.css']
})
export class BillOrderComponent implements OnInit {

  public count: Number = 3;

  constructor(private _router: Router) { }



  ngOnInit() {
  }

  onClickBack() {
    this._router.navigate(['menu']);
  }

  GetBillOrder(bill) {

  }
}
