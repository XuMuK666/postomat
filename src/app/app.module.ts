import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {DxButtonModule, DxPopupModule} from 'devextreme-angular';

import { AppComponent } from './app.component';
import {
  DxDataGridModule,
  DxNumberBoxModule,
  DxCheckBoxModule } from 'devextreme-angular';
import {Interceptor} from './interceptor';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    DxDataGridModule,
    DxNumberBoxModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxPopupModule,
    DxNumberBoxModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
