// 類成員修飾符
 class Emp {
//   private ename: string | undefined; // 私有屬性可以被繼承, 但子類不可直接訪問
//   private salary: number | undefined;
protected ename: string | undefined;
protected salary: number | undefined;
}
class Coder extends Emp{  // 繼承 孩子元素多
  private lang: string | undefined;
  printInfo() {
    console.log('員工的姓名: ', this.ename); // 被保護的成員只能在本類內部即子類內部使用, 其他地方不允許
    console.log('擅長的語言: ', this.lang);
  }
}

let c2 = new Coder();
// c2.ename = 'tom';
// c2.salary = 8000;
// c2.lang = 'javascript';
c2.printInfo();
// c2.ename; 不可訪問
