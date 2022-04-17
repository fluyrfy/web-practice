import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { Myc01TodolistComponent } from './myc01-todolist/myc01-todolist.component';
import { Myc02EmplistComponent } from './myc02-emplist/myc02-emplist.component';
import { SexPipe } from './sex.pipe';
import { ZzmmPipe } from './zzmm.pipe';
import { Zzmm2Pipe } from './zzmm2.pipe';
import { Myc03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';

@NgModule({
  declarations: [
    AppComponent,
    Myc01TodolistComponent,
    Myc02EmplistComponent,
    SexPipe,
    ZzmmPipe,
    Zzmm2Pipe,
    Myc03Component,
    Myc04Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
