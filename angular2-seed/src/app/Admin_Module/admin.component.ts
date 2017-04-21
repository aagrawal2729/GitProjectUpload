import {Component} from '@angular/core';
import { CommonService } from '../shared/CommonService';
import { Router } from '@angular/router';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app',
   providers: [CommonService],
  templateUrl: './admin.component.html',
})
export class AdminComponent {

userList : any[];
  constructor (private commonService : CommonService 
  ){
      

  }

  

  getUsers(){
this.commonService.getAllUsers().subscribe(data => {
      this.userList = data;
    });
}
}