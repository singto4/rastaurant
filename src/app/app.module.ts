import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchInformationComponent } from './component/search-information/search-information.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GetMenuList } from './service/menulist';
import { ResearchInformationComponent } from './component/research-information/research-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchInformationComponent,
    ResearchInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule,
    FormsModule
  ],
  providers: [GetMenuList],
  bootstrap: [AppComponent]

})
export class AppModule { }
