namespace Animal  // 可以存放很多模板的空間 便於存放管理分類
{
  namespace qq
  {
    class Person {
      public Person(double h, int a, string n) {
        Console.WriteLine("我是構造方法");
        height = h;
        age = a;
        name = n;
      }
      public double height;
      public int age;
      public string name;

      public void SayHi() {
        Console.WriteLine("My name is "+this.name);
        Console.WriteLine("My height is "+this.height);
        Console.WriteLine("My age is "+this.age);
      }
      public void IsAdult() {
        if (age >= 18)
        {
          Console.WriteLine("我成年了");
        } else {
          Console.WriteLine("我未成年");
        }
      }

      public int Add(int num1, int num2) {
        return num1 + num2;
      }

    }
  }

}


