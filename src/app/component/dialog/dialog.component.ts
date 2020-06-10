import { Component, OnInit } from '@angular/core';
import { ShareService} from '../../service/service.share';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public list_order: Map<String, any>;

  constructor(private _shareservice: ShareService) { }

  ngOnInit() {
    this.list_order = this._shareservice.map_order;
    console.log(this._shareservice.map_order);

  }

}
