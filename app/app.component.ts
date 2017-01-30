import {Component} from '@angular/core'
import {User} from './user';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.html'
})
export class AppComponent{

    user = new  User();
}