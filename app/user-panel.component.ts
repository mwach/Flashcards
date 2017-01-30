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

}