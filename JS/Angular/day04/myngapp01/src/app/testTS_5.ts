// 使用接口
// 要求汽車必須提供start和stop兩個方法
// Interface是一種特殊類, 規範"要求某個class必須具備XXX方法"
interface Runnable {
  wheel: string;
  start(): void;  //接口中的方法沒有主體
  stop(): void;
}

class Car implements Runnable{
  wheel = '';
  start () {

  }
  stop () {

  }
}
