import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { Myc01UserComponent } from './myc01-user/myc01-user.component';
import { Myc02UserLoginComponent } from './myc02-user-login/myc02-user-login.component';
import { Myc02UserRegisterComponent } from './myc02-user-register/myc02-user-register.component';
import { Myc04ProductlistComponent } from './myc04-productlist/myc04-productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    Myc01UserComponent,
    Myc02UserLoginComponent,
    Myc02UserRegisterComponent,
    Myc04ProductlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
