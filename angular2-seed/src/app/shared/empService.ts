import { Injectable } from '@angular/core';

@Injectable()

export class EmpService {

getEmpList()
{
    var empList = [
    {
    'emp_id' : '001' ,
    'emp_name' : 'abc' ,
    'emp-dept' : 'Engg' 
    
    },
    {
    'emp_id' : '002' ,
    'emp_name' : 'abcde' ,
    'emp_dept' : 'Process' 
    },
    {
    'emp_id' : '003' ,
    'emp_name' : 'abcefg' ,
    'emp_dept' : 'HR' 
    }
];
return empList;
	}


    getEmpDetails(){
        var empDet = {
                'emp_id' : '1002',
                'emp_name' : 'Rahul',
                'emp_dept' : 'engg',
                'mail' : 'rahul@cyb.com',
                'bloodgrp' : 'A+ve'
        };
        return empDet; 

    }
}