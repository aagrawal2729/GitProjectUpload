import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
import { CommonService } from './CommonService';

export class User {
  constructor(public username: string, public password: string) { }
}

var users = [
  new User('admin', 'admin'),
  new User('trainer', 'trainer'),
  new User('trainee', 'trainee')
];

@Injectable()
export class AdminLoginServiceComponent {

  constructor(private _router: Router, private commonService: CommonService, private http: Http
  ) { }

  getAllUsers(user) {
    let url = "http://localhost:4000/getAll?username="+user.username+"&password="+user.password";  // updated string 

    return this.http.get(url).map((res)=>res.json()); 
  }

 
  login(user) {
       this.getAllUsers(user).subscribe(
        data => {
         console.log("List of Users form DB is : " + data[0].userName);

         
        });


    // }

    //     ********************************************************
    var authenticateAdminUser = users.find(u => u.username === 'admin');
    var authenticateTrainerUser = users.find(u => u.username === 'trainer');
    var authenticateTraineeUser = users.find(u => u.username === 'trainee');


    //authenticate 
    if (authenticateAdminUser && authenticateAdminUser.password === user.password) {
      localStorage.setItem("user", user.username);
      console.log('Valid User');
      var role = this.commonService.getRoleBasedUsers();
      console.log('Role is ' + role);


      this._router.navigate(['admin']);
      return true;
    }
    // ******************************************************


    else if (authenticateTrainerUser && authenticateTrainerUser.password === user.password) {
      localStorage.setItem("user", user.username);
      console.log('Valid User');
      this._router.navigate(['trainer']);
      return true;

    }
    else if (authenticateTraineeUser && authenticateTraineeUser.password === user.password) {
      localStorage.setItem("user", user.username);
      console.log('Valid User');
      this._router.navigate(['trainee']);
      return true;
    }


    else {
      console.log('Invalid User');
      this._router.navigate(['login']);
      return true;
    }
  }
}








