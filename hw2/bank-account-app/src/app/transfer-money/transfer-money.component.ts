import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ITransferData} from "../models/transfer-data.model";

enum TransferType {
  deposit,
  withdrawal,
  loan
}

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.css']
})
export class TransferMoneyComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  transferObj: ITransferData = {transferTo: "", amount: 0, transferDate: new Date()};

  @Output() onTransferChanged = new EventEmitter<ITransferData>();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      transferTo: new FormControl("", Validators.required),
      amount: new FormControl("", Validators.required)
    });
  }

  submit() {
    if(this.form.controls["transferTo"].value.toLowerCase() in TransferType) {
      this.transferObj.transferTo = this.form.controls["transferTo"].value.toLowerCase();
      this.transferObj.amount = this.form.controls["amount"].value;
      this.transferObj.transferDate = new Date();

      if(this.form.controls["transferTo"].value.toLowerCase() === "withdrawal") {
        this.transferObj.minus = true;
      } else {
        this.transferObj.minus = false;
      }
      this.sendTransferData(this.transferObj);
    }
    this.form.reset();
  }

  sendTransferData(transferObj: ITransferData){
    this.onTransferChanged.emit(transferObj);
  }
}
