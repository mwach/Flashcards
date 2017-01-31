import { Component } from '@angular/core'
import { User } from './user';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.html'
})
export class AppComponent {

    user = new User();

    options = {
        position: ["top", "left"],
        timeOut: 1000,
    }
}