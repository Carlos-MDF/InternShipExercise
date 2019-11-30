import { Component, OnInit } from '@angular/core';
import UserJson from '../../assets/users.json';

@Component({
    selector: 'app-repositories',
    templateUrl: './repositories.component.html',
    styleUrls: ['./repositories.component.scss']
  })


export class RepositoriesComponent implements OnInit {

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