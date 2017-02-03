import { Component, Input } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { LoggerService } from './logger.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'login-panel',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    username: string;
    password: string;

    constructor(
        private userService: UserService,
        private notificationsService: NotificationsService,
        private loggerService: LoggerService) {
            this.cleanForm();
    }


    @Input()
    user: User;

    login() {
        this.userService.login(this.username, this.password).
            then(user => {
                this.cleanForm();
                this.user.logged = true;
                this.user.name = user.name;
            }).
            catch((ex) => { this.loginError(ex); });
    }

    private loginError(err: any) {
        this.cleanForm();
        this.loggerService.err(err);

        this.notificationsService.error(
            'Login failed',
            'Invalid username or password',
        )
    }

    private cleanForm() {
        this.password = "";
        this.username = "";
    }
}