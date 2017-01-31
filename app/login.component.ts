import { Component, Input } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import {NotificationsService} from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'login-panel',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    username = "";
    password = "";

    constructor(
        private userService: UserService,
        private _notificationsService: NotificationsService) {

    }


    @Input()
    user: User;

    login() {
        this.userService.login(this.username, this.password).
            then(user => {
                this.cleanForm();
                this.user.logged = true;
                this.user.name = user.name;

        this._notificationsService.success(
            'Some Title',
            'Some Content',
            {
                timeOut: 5000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            }
        )

            }).
            catch((ex) => {this.loginError(ex);});
    }

private loginError(err: any){
    console.log(err); 
    this.cleanForm();

        this._notificationsService.error(
            'Login failed',
            'Invalid username or password',
        )

}

    private cleanForm() {
        this.password = "";
        this.username = "";
     }
    private handleError(error: any) {
        console.log(error);

    }
}