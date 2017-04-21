import { Component , OnInit } from '@angular/core' ;
import { EmpService } from '../shared/empService' ;


@Component ({
	selector : 'emp-Details',
	styleUrls : ['./empDetails.component.css'],
	templateUrl : './empDetails.component.html'
})

export class EmpDetailsComponent implements OnInit 
{
	
	
	empDetails : any;

	constructor(public empService : EmpService)
	{
	
	}

	ngOnInit()
	{
		
		this.empDetails = this.empService.getEmpDetails();

	}
}

