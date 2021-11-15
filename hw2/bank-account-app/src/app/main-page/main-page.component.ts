import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { registerLocaleData } from '@angular/common';
import {ITransferData, IUser} from "../models/transfer-data.model";

import localeFr from '@angular/common/locales/fr';
import {Subscription, timer} from "rxjs";
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  userName: string = "js";
  userPin: number = 1111;

  user: string = "";
  pin: string = "";
  loggedInTime: Date = new Date();
  toggleApp: boolean = false;
  currentBalance: number = 26545.49;

  movements: ITransferData[] = [
    {transferTo: "withdrawal", amount: 1490.34, transferDate: new Date('2020/03/25 12:34')},
    {transferTo: "deposit", amount: 34599.00, transferDate: new Date('2020/04/12 15:15')},
    {transferTo: "deposit", amount: 7400.25, transferDate: new Date('2021/05/21 21:55')},
    {transferTo: "deposit", amount: 99332.99, transferDate: new Date('2021/06/31 18:24')},
    {transferTo: "withdrawal", amount: 1324.75, transferDate: new Date('2021/09/11 03:05')},

  ];
  inBalance: number = 0;
  outBalance: number = 0;
  interestBalance: number = 0;
  sorted: boolean = false;

  //TIMER
  countDown: Subscription = new Subscription();
  counter = 600;
  tick = 1000;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl(""),
      pin: new FormControl("")
    });
  }

  submit() {
    this.user = this.form.controls["user"].value;
    this.pin = this.form.controls["pin"].value;

    if (this.userName === this.user && this.userPin === +this.pin) {
      this.toggleApp = true;
      this.loggedInTime.getDate();
      this.user = "";
      this.pin = "";

      //TIMER
      this.countDown = timer(0, this.tick)
        .subscribe(() => {
          if(this.counter - 1 >= 0) {
            --this.counter
          } else {
            this.toggleApp = false;
          }
        })
    }
    this.form.reset();
  }

  getTransferData($event: ITransferData) {
    const movementObj: ITransferData = {
      transferTo: $event.transferTo,
      transferDate: $event.transferDate,
      amount: $event.amount,
      minus: $event.minus ? $event.minus : false
    }

    this.movements.push(movementObj);

    if($event.transferTo === "loan") {
      this.currentBalance += $event.amount;
    } else {
      this.currentBalance -= $event.amount;
    }

    if($event.minus) {
      this.outBalance += $event.amount;
    }else {
      this.inBalance += $event.amount;
    }
  }

  sortSummary() {
    if(!this.sorted){
      this.movements = this.movements.sort((a, b) => a.amount > b.amount ? 1 : -1);
      this.sorted = true;
    } else {
      this.movements = this.movements.sort((a, b) => a.transferDate > b.transferDate ? 1 : -1);
      this.sorted = false;
    }
  }

  getUserData($event: IUser) {
    if (this.userName === $event.user && this.userPin === +$event.pin) {
      console.log($event.user, $event.pin)
      this.toggleApp = false;
    }
  }
}
