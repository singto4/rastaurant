import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchInformationComponent } from './component/search-information/search-information.component';
import { HttpClientModule } from '@angular/common/http';
import { GetMenuList } from './service/service.menulist';
import { ShareService} from './service/service.share';
import { ResearchInformationComponent } from './component/research-information/research-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOrderComponent } from './component/create-order/create-order.component';
import { ServiceOrder } from './service/service.order';
import { BillOrderComponent } from './component/bill-order/bill-order.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInformationComponent,
    ResearchInformationComponent,
    CreateOrderComponent,
    BillOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [GetMenuList, ShareService, ServiceOrder],
  bootstrap: [AppComponent]

})
export class AppModule { }
