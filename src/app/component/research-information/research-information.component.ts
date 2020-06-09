import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetMenuList } from '../../service/service.menulist';
import { MenuList, Menu } from 'src/app/models/model_menu';

@Component({
  selector: 'app-research-information',
  templateUrl: './research-information.component.html',
  styleUrls: ['./research-information.component.css']
})
export class ResearchInformationComponent {
  @Output() Onlist: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-input-rename
  @Input('list') list: Menu[];

  constructor(private _menuservice: GetMenuList) { }

  onClick(dataForm) {

    if (dataForm.keyword === '') {
      this._menuservice.GetMenuList().subscribe(
        res => {
          this.Onlist.emit(res.menu);
        }
      );
    } else {
      this._menuservice.GetMenuListByKeyword(dataForm.keyword).subscribe(
        res => {
          this.Onlist.emit(res.menu);
        }
      );
    }
  }

}
