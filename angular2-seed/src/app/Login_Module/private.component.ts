import {Component} from '@angular/core';
import {AdminLoginServiceComponent } from '../shared/AdminLoginService'
 
@Component({
    selector: 'login-form',
    providers: [AdminLoginServiceComponent],
    template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    <a (click)="logout()" href="#">Click Here to logout</a>
                </div>
            </div>
    	`
})
 
export class PrivateComponent {
 
    constructor(
        private _service:AdminLoginServiceComponent){}
 
    ngOnInit(){
        this._service.checkCredentials();
    }
 
    logout() {
        this._service.logout();
    }
}