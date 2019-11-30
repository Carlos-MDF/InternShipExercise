import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserJson from '../../assets/users.json';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
  })


export class UserComponent implements OnInit {

    userListJSON: any = [];
    userList: any = [];

    constructor() {
        this.userListJSON = UserJson;
        this.userList = this.userListJSON.users;
        console.log(this.userList);
     }

    ngOnInit(){
       
    }
}