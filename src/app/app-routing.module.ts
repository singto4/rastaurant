import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './component/create-order/create-order.component';
import { SearchInformationComponent } from './component/search-information/search-information.component';
import { BillOrderComponent } from './component/bill-order/bill-order.component';
import { BillStatusComponent } from './component/bill-status/bill-status.component';
import { ManageMenuComponent } from './component/manage-menu/manage-menu.component';

const routes: Routes = [
    { path: 'order', component: CreateOrderComponent },
    { path: 'menu', component: SearchInformationComponent },
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'billorder', component: BillOrderComponent },
    { path: 'billstatus', component: BillStatusComponent },
    { path: 'managemenu', component: ManageMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
