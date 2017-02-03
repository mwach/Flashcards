import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
import {UserPanelComponent} from './user-panel.component';
import {SettingsComponent} from './settings.component';
import {QuizComponent} from './quiz.component';

import {UserService} from './user.service';
import {LoggerService} from './logger.service';
import {QuizService} from './quiz.service';
import {SimpleNotificationsModule} from 'angular2-notifications';


@NgModule({
  imports:      [ BrowserModule, FormsModule, SimpleNotificationsModule ],
  declarations: [ AppComponent, LoginComponent, UserPanelComponent, SettingsComponent, QuizComponent ],
  providers:    [ UserService, LoggerService, QuizService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
