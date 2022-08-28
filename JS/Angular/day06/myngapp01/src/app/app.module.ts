import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SecurityComponent } from './security/security.component';
import { LoginGuard } from './login.guard';
import { TimeGuard } from './time.guard';

let route = [
  { path: '', component: IndexComponent },
  { path: 'user/center', component: UserCenterComponent,
    //當前路由可以被激活嗎
    canActivate: [LoginGuard, TimeGuard],
    children: [ //嵌套的二級路由
    { path: '', component: InfoComponent },
    { path: 'info', component: InfoComponent },
    { path: 'avatar', component: AvatarComponent },
    { path: 'security', component: SecurityComponent },
  ] },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserCenterComponent,
    NotFoundComponent,
    InfoComponent,
    AvatarComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route), //記得要註冊啊!!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
