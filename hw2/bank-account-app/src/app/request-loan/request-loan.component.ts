import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ITransferData} from "../models/transfer-data.model";

@Component({
  selector: 'app-request-loan',
  templateUrl: './request-loan.component.html',
  styleUrls: ['./request-loan.component.css']
})
export class RequestLoanComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  transferObj: ITransferData = {transferTo: "", amount: 0, transferDate: new Date()};

  @Output() onLoanChanged = new EventEmitter<ITransferData>();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      amount: new FormControl("", Validators.required)
    });
  }

  submit() {
      this.transferObj.transferTo = "loan";
      this.transferObj.amount = this.form.controls["amount"].value;
      this.transferObj.transferDate = new Date();

      this.sendTransferData(this.transferObj);
      this.form.reset();
  }

  sendTransferData(transferObj: ITransferData){
    this.onLoanChanged.emit(transferObj);
  }
}
