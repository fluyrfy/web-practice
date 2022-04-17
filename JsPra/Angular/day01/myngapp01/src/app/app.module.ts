import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyC01Component } from './myc01';
import { MyC02Component } from './myc02.component';
import { MyC03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { Myc05Component } from './myc05/myc05.component';

@NgModule({
  declarations: [  //聲明
    AppComponent,
    MyC01Component,
    MyC02Component,
    MyC03Component,
    Myc04Component,
    Myc05Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
