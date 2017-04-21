import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {
  constructor(private http: Http) {}


getEmployeeList() {

    /*
    var EmpList = [
                    {
                        'id' : '1324',
                        'name' : 'Rahul Selukar',
                        'dept': 'Emg'
                    },
                    {
                        'id' : '2343',
                        'name' : 'Ram Rama',
                        'dept': 'QA'
                    },
                    
                    {
                        'id' : '6343',
                        'name' : 'Soham Vlukar',
                        'dept': 'Emg'
                    }
                    ,
                    
                    {
                        'id' : '446343',
                        'name' : 'Kunal Vlukar',
                        'dept': 'Emg'
                    }
                 ]; */
            
            let url = "http://localhost:5000/api/users?page=2";
            return this.http.get(url).map((res)=>res.json());
            
            //function(res){
            // return res.json()
            //}
  }


getEmployeeDetails(id:number){

     var empDetails = {
                            'name' : 'Rahul Selukar',
                            'dept': 'Eng',
                            'email': 'rseluka@email.com',
                            'mobNo': '9865665',
                            'hobby' : 'Reading',
                            'location': 'Ct2-1-878B'

     };

     return empDetails;

    }
}
