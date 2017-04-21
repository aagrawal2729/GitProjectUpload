import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import { EmpService } from '../shared/emp.Service';


@Component({
selector: 'emp-list',
styleUrls:['./empList.Component.css'],
templateUrl: './empList.Component.html',

})

export class empListComponent implements OnInit{

empLists: any[];
 

  constructor(public empListService: EmpService) {

  }
  

ngOnInit() {
     this.empListService.getEmployeeList().subscribe(
     data => {
      this.empLists = data.data;
     });
     
  }
}