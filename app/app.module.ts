import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
import {UserPanelComponent} from './user-panel.component';

import {UserService} from './user.service';
import {SimpleNotificationsModule} from 'angular2-notifications';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SimpleNotificationsModule ],
  declarations: [ AppComponent, LoginComponent, UserPanelComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
