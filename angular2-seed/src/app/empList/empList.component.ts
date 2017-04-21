import { Component , OnInit } from '@angular/core' ;
import { EmpService } from '../shared/empService' ;
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component ({
	selector : 'emp-list',
	styleUrls : ['./empList.component.css'],
	templateUrl : './empList.component.html'
})

export class EmpListComponent implements OnInit 
{
	
	empList  : any[];

	constructor(public empService : EmpService)
	{
	
	}

	ngOnInit()
	{
		console.log(this.empService.getEmpList());
		this.empList = this.empService.getEmpList();
	}
}

