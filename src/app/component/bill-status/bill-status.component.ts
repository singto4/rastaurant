import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceOrder } from '../../service/service.order';
import { BillStatus} from '../../models/model_billstatus';

@Component({
  selector: 'app-bill-status',
  templateUrl: './bill-status.component.html',
  styleUrls: ['./bill-status.component.css']
})
export class BillStatusComponent implements OnInit {

  public listbill: BillStatus[];
  public page: Number = 1;

  constructor(private _router: Router, private _serviceorder: ServiceOrder) { }

  ngOnInit() {
    this._serviceorder.GetBillStatus().subscribe(
      res => {
        this.listbill = res.billstatus;
        this.page = 1;
      }
    );
  }

  onClickBack() {
    this._router.navigate(['billorder']);
  }

  onClickUpdateStatus(id) {
    this._serviceorder.UpdateBilllStatus(id).subscribe(
      res => {
        console.log(res);
      }
    );

    this.ngOnInit();
    console.log('xxx');
  }

}
