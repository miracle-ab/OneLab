import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ITransferData, IUser} from "../models/transfer-data.model";

@Component({
  selector: 'app-close-account',
  templateUrl: './close-account.component.html',
  styleUrls: ['./close-account.component.css']
})
export class CloseAccountComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  userObj: IUser = {user: "", pin: ""};

  @Output() onUserClosed = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl(""),
      pin: new FormControl("")
    });
  }

  submit() {
    this.userObj.user = this.form.controls["user"].value;
    this.userObj.pin = this.form.controls["pin"].value;

    this.sendUserData(this.userObj);
    this.form.reset();
  }

  sendUserData(userObj: IUser) {
    this.onUserClosed.emit(userObj);
  }
}
