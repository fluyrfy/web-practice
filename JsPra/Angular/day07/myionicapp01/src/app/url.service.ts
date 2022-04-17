import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  public host = 'http://www.codeboy.com:9999/';
  public indexApi = this.host + 'data/product/index.php';
  public productListApi = this.host + 'data/product/list.php?pno=';
  public productDetailApi = this.host + 'data/product/details.php?lid=';
  public loginApi = this.host + 'data/user/login.php';
  public registerApi = this.host + 'data/user/register.php';
  constructor() {}
}
