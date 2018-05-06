import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent implements OnInit {

  username:any = '';
  constructor() { }

  ngOnInit() {
  }

  resetUserName() {
    this.username = '';
  }

}
