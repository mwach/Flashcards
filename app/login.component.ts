import { Component, Input } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    moduleId: module.id,
    selector: 'login-panel',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    constructor(
        private userService: UserService) {

    }

    @Input()
    user: User;

    login(username: string, password: string) {
        this.userService.login(username, password).
            then(user => {
                this.user.logged = true;
                this.user.name = user.name;
            }).
            catch(this.handleError);
    }

    private handleError(error: any) {
        console.log(error);
    }
}