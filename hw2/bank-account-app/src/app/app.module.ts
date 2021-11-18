import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { RequestLoanComponent } from './request-loan/request-loan.component';
import { CloseAccountComponent } from './close-account/close-account.component';
import {FormatTimePipe} from "./pipes/formatTime.pipe";


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TransferMoneyComponent,
    RequestLoanComponent,
    CloseAccountComponent,
    FormatTimePipe
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
