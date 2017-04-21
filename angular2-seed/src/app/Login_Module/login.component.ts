import { Component, ElementRef, OnInit } from '@angular/core';
import { AdminLoginServiceComponent, User } from '../shared/AdminLoginService'

@Component({
    selector: 'login-form',
    providers: [AdminLoginServiceComponent],
    styleUrls: ['./login.component.css'],
    templateUrl: './login.component.html',

})

export class LoginComponent {
    public user = new User('', '');
    public errorMsg = '';

    constructor(
        private _service: AdminLoginServiceComponent) { }

    login() {
        if (!this._service.login(this.user)) {
            console.log(this.user);
            this.errorMsg = 'Failed to login';
        }

        console.log("inside login of LoginComponent");
    }
}



