// ts是強類型語言: 所有變數、形參、函數都要聲明類型
//let uname: string = 'tom';
class User {
  uname: string = '';
  age: number = 0;
  isMarried: boolean = false;
  userList: string[] = [];
  jobList: any[] = [];
  countList: number[] = [];
  f1(n1: any, n2: any): string { // 函數聲明的類型為返回值的類型，無返回值則 : void
    this.uname = 'Frank';
    this.age = 20;
    this.isMarried = true;
    this.userList = ['tom', '20', 'mary'];
    this.jobList = [20, 'Amy', true];
    console.log(n1, n2);
    return 'test';
  }
}

let u1 = new User();
u1.f1(10, 20);
