// 類成員的訪問修飾符特殊用法
class Student {
  // private sname: string = '';
  // constructor(sname: string) {
  //   this.sname = sname;
  // }
  constructor(private sname: string) { //TS專有簡寫, 等同上述
  }
  setSname() {
    this.sname = 'tom';
  }
}

let s2 = new Student('Frank');
