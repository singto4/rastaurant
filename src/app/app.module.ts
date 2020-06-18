import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchInformationComponent } from './component/search-information/search-information.component';
import { HttpClientModule } from '@angular/common/http';
import { GetMenuList } from './service/service.menulist';
import { ShareService } from './service/service.share';
import { ResearchInformationComponent } from './component/research-information/research-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOrderComponent } from './component/create-order/create-order.component';
import { ServiceOrder } from './service/service.order';
import { BillOrderComponent } from './component/bill-order/bill-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material';
import { DialogComponent } from './component/dialog/dialog.component';
import { DialogNullComponent } from './component/dialog-null/dialog-null.component';
import { DialogMenuNullComponent } from './component/dialog-menu-null/dialog-menu-null.component';
import { BillStatusComponent } from './component/bill-status/bill-status.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { ServiceLogin } from './service/service.login';

@NgModule({
  declarations: [
    AppComponent,
    SearchInformationComponent,
    ResearchInformationComponent,
    CreateOrderComponent,
    BillOrderComponent,
    DialogComponent,
    DialogNullComponent,
    DialogMenuNullComponent,
    BillStatusComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatDialogModule
  ],
  entryComponents: [DialogComponent, DialogNullComponent, DialogMenuNullComponent, LoginComponent],
  providers: [GetMenuList, ShareService, ServiceOrder, ServiceLogin],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],


})
export class AppModule { }
