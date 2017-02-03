import { Component } from '@angular/core'
import { User } from './user';
import { QuestionHub } from './QuestionHub';
import { NotificationsService } from 'angular2-notifications';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.html',
})
export class AppComponent {

    public user = new User();
    public questionHub = new QuestionHub();

    options = {
        position: ["top", "left"],
        timeOut: 1000,
    }
}