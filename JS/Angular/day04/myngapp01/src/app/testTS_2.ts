// 類成員的訪問修飾符
// private: 私有的只能在本類內部使用,
// pulic(默認值): 公共的, 公共成員可以再本類內部以及外部使用(一般情況下, class內屬性不應該讓外界隨便訪問, 通常設置為private, 方法則一般設為public)
// protected: 
class User2 {
  private age: number = 20; // 私有屬性可以自己修改
  // setAge() {
  //   this.age = 30;
  // }
  public setAge(age: number) {
    if (age < 18 || age > 60) {
      console.log('非法的年齡')
    }else{
      this.age = age;
    }
  }
  public getAge() {
    return this.age;
  }
}

let u2 = new User2();
// u2.age = 'tom'
// u2.age = 200; // 類成員不應該讓外界隨意賦值
// u2.age = -2; // 強類型語言只能檢查類型錯誤，無法檢查值範圍的錯誤
u2.setAge(30);
u2.getAge();
