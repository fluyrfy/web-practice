import { Pipe } from "@angular/core";

@Pipe( {
  name: 'sex' //管道名(Vue中為過濾器名)
} )
export class SexPipe {
  // 管道中執行過濾任務的是一個固定的函數
  // transform(val: number) {
  //   if (val == 1) {
  //     return '男'
  //   }else if (val == 0) return '女';
  //   else return '未知'
  // }
  transform(val: number, lang = 'zh') { //ES6 新特性參數可傳默認值
    if (lang == 'zh') {
      if (val == 1) {
        return '男'
      }else if (val == 0) {
        return '女';
      }else {
        return '未知';
      }
    }else if (lang == 'en') {
      if (val == 1) {
        return 'Male'
      }else if (val == 0) {
        return 'Female';
      }else {
        return 'Unkown';
      }
    }
    return;
  }
}
