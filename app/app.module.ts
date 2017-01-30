import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './login.component';
import {UserPanelComponent} from './user-panel.component';

import {UserService} from './user.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, LoginComponent, UserPanelComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
