import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Myc01ParentBlogComponent } from './myc01-parent-blog/myc01-parent-blog.component';
import { Myc02Child1ModifyComponent } from './myc02-child1-modify/myc02-child1-modify.component';
import { Myc03Child2PhotoComponent } from './myc03-child2-photo/myc03-child2-photo.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

//聲明路由辭典 路由地址和路由組件的對應集合
let routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'plist', component: ProductListComponent },
  { path: 'pdetail/:lid', component: ProductDetailComponent },
  { path: 'usercenter', component: UserCenterComponent },
  { path: '**', component: NotFoundComponent }, //雙星匹配任意地址, 不能擺在路由辭典的第一個, 否則全部都匹配
]

@NgModule({
  declarations: [
    AppComponent,
    Myc01ParentBlogComponent,
    Myc02Child1ModifyComponent,
    Myc03Child2PhotoComponent,
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserCenterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) //導入路由模塊並註冊路由辭典
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
