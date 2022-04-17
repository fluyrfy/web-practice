import { Pipe, PipeTransform } from '@angular/core';
import { UrlService } from './url.service';

@Pipe({
  name: 'imgUrl',
})
export class ImgUrlPipe implements PipeTransform {
  constructor(private url: UrlService) {}
  // 把所有img src替換為帶host的url
  transform(val: string) {
    if (val) {
      // ''用法無法全局替換 需用正則表達式
      return val.replace(/src="img/g, 'src="' + this.url.host + 'img');
    }
  }
}
