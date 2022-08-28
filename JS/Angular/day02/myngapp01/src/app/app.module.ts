import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Myc01BuycountComponent } from './myc01-buycount/myc01-buycount.component';
import { Myc02NgforComponent } from './myc02-ngfor/myc02-ngfor.component';
import { Myc03NgifComponent } from './myc03-ngif/myc03-ngif.component';
import { Myc04NgifComponent } from './myc04-ngif/myc04-ngif.component';
import { Myc05NgifelseComponent } from './myc05-ngifelse/myc05-ngifelse.component';
import { Myc06StyleComponent } from './myc06-style/myc06-style.component';
import { Myc07SwitchComponent } from './myc07-switch/myc07-switch.component';
import { Myc08NgmodelComponent } from './myc08-ngmodel/myc08-ngmodel.component';
import { XuYaoQiangDiaoDirective } from './xu-yao-qiang-diao.directive';
import { Myc09TodoListComponent } from './myc09-todo-list/myc09-todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Myc01BuycountComponent,
    Myc02NgforComponent,
    Myc03NgifComponent,
    Myc04NgifComponent,
    Myc05NgifelseComponent,
    Myc06StyleComponent,
    Myc07SwitchComponent,
    Myc08NgmodelComponent,
    XuYaoQiangDiaoDirective,
    Myc09TodoListComponent
  ],
  imports: [
    BrowserModule, //導入 CommonModule
    FormsModule //導入 FormsModule提供ngModel指令
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
