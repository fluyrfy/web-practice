// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

//  常見資料型態與變數
// string "Frank not good at Unity"
// char 'A'
// int 22
// double 60.5
// bool true or false

// string name = "Frank";
// int age = 22;
// bool sex = true;
// Console.WriteLine("name: "+name+" age: "+age+" sex: "+ sex);

// 字串常見用法
// Console.WriteLine("Hello \n Mr.White".ToLower());

// 數字常見用法
// int num = -3;
// Console.WriteLine(5.0/2);
// Console.WriteLine(Math.Abs(num));

// 取得用戶輸入
// Console.Write("請輸入名字: ");
// string name = System.Console.ReadLine();
// Console.WriteLine("我的名字是: "+name);

// 基本計算機
// Console.Write("請輸入第一個數:");
// double num1 = Convert.ToDouble(Console.ReadLine());
// Console.Write("請輸入第二個數: ");
// double num2 = Convert.ToDouble(Console.ReadLine());
// Console.WriteLine(num1 + num2);

// Array
// int[] scores = { 50, 60, 70, 30, 20 };
// string[] phones = new String[10];

// phones[0] = "0965605173";
// Console.WriteLine(phones[0]);
// Console.Write(scores[4]);
// scores[0] = 80;
// Console.Write(scores[0]);

// if 判斷句
// bool b = false;
// bool a = true;
// if (b)
// {
//     Console.WriteLine("if=true");
// } else
// {
//     Console.WriteLine("if=false");
// }

// 進階計算機
// Console.Write("請輸入第一個數字: ");
// double num1 = Convert.ToDouble(Console.ReadLine());
// Console.Write("請輸入運算符: ");
// string oper = Console.ReadLine();
// Console.Write("請輸入第二個數字: ");
// double num2 = Convert.ToDouble(Console.ReadLine());

// if (oper == "+")
// {
//     Console.WriteLine(num1 + num2);
// } else if (oper == "-")
// {
//     Console.WriteLine(num1 - num2);
// } else if (oper == "*")
// {
//     Console.WriteLine(num1 * num2);
// }
// int i = 1;
// while (i < 10)
// {
//      Console.WriteLine(i);
//      i++;
// };


// 猜數字遊戲
// int i = 50;
// int guess;
// int guess_count = 0;
// int guess_limit = 3;
// bool win = false;
// do
// {
//     Console.Write("請輸入猜測數字: ");
//     guess = Convert.ToInt32(Console.ReadLine());
//     if (guess < i)
//     {
//         Console.WriteLine("再大一點！");
//     } else if (guess > i)
//     {
//         Console.WriteLine("再小一點！");
//     } else
//     {
//         Console.WriteLine("恭喜猜對！");
//         win = true;
//     }
//     guess_count++;
// } while (guess != i && guess_count != guess_limit);

// if (!win)
// {
//     Console.WriteLine("猜測次數已到");
// }

// for迴圈
// int[] nums = { 1, 3, 5, 7, 9 };
// for (int i = 0; i < nums.Length; i++)
// {
//   Console.WriteLine(nums[i]);
// }

// 二維陣列
// int[,] nums = {{ 1, 2, 3}, { 4, 5, 6 }, { 7, 8, 9 }};
// int[,] num = new int[3, 4];
// num[0, 0] = 3;
// num[0, 1] = 4;

// Console.WriteLine(nums[0, 0]+nums[3, 2]);

//class object 類別 物件

// Person person1 = new Person();
// person1.age = 22;
// person1.height = 168.9;
// person1.name = "Frank";

// Console.WriteLine(person1.age);

// namespace  using
// using System;
// using Animal.qq;

// Person person1 = new Person(168.9, 22, "Frank");
// person1.age = 22;
// person1.height = 168.9;
// person1.name = "Frank";

// Console.WriteLine(person1.age);
// person1.SayHi();
// person1.IsAdult();
// Console.WriteLine(person1.Add(73, 52));

// Person person2 = new Person(180.0,30, "Tom");
// person2.SayHi();

// Video video1 = new Video();
// Console.WriteLine(Video.video_count);
