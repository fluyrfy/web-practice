import { Pipe } from "@angular/core";

@Pipe({
  name: 'zzmm'
})
export class ZzmmPipe {
  transform(val: number) {
    if ( val == 10) {
      return '群眾';
    }else if (val == 20) {
      return '黨員';
    }else {
      return '幹部';
    }
  }
}
