import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImgUrlPipe } from './img-url.pipe';

// 創建路由辭典
const routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent, name: 'Index' },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-detail/:pid', component: ProductDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'user-login', component: UserLoginComponent },
  // { path: 'main', component: MainComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent, //首頁組件
    ProductListComponent, // 商品列表組件
    CartComponent, // 購物車
    UserLoginComponent, // 用戶登入組件
    ProductDetailComponent, //商品詳情
    MainComponent, // 主介面組件
    NotFoundComponent, ImgUrlPipe, //頁面未查找
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
