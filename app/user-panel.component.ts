import {Component, Input} from '@angular/core';
import {User} from './user';

@Component({
    moduleId: module.id,
    selector: 'user-panel',
    templateUrl: 'user-panel.component.html'
})
export class UserPanelComponent {

    @Input()
    private user: User;

    public logout(): void{
        this.user.logged = false;
        this.user.email = null;
        this.user.name = null;
        this.user.surname = null;
    }
}