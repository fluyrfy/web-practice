<<<<<<< HEAD
// import.js

// 注意區分:
// commonJS: require('./export');
// 不同於 node.js 文件須有完整後綴名

// ES6 導出的是多個
import { m, add, Stu } from "./export.js";

// 起別名 as
import { m as mm } from "./export1.js";
// {}中可以自定義填寫 想要引入的內容名

import { name, age, gender } from "./export2.js";

// 導入一個值特別多的
// import { a, b, c, d, e, f } from "./export3.js";
// 偷懶寫法
import * as exp from "./export3.js";
console.log(exp.a, exp.b);

console.log(name, age, gender);
// console.log(a, b, c, d);

// 對於 export default 寫法導出的
// import exp4 from "./export4.js";
// console.log(exp4.a, exp4.add(5, 6));
// 混合引入方式: 引入所有的 與 單獨引入取別名
import exp4, { add as plus } from "./export4.js";

// 使用時:
console.log(m);

console.log(mm);

console.log(add(10, 20)); //30

console.log(Stu);

// 類使用時須實例化
let s = new Stu();
console.log(s.show());

// 測試: ES6 不能用 node xx.js 來執行
=======
// import.js

// 注意區分:
// commonJS: require('./export');
// 不同於 node.js 文件須有完整後綴名

// ES6 導出的是多個
import { m, add, Stu } from "./export.js";

// 起別名 as
import { m as mm } from "./export1.js";
// {}中可以自定義填寫 想要引入的內容名

import { name, age, gender } from "./export2.js";

// 導入一個值特別多的
// import { a, b, c, d, e, f } from "./export3.js";
// 偷懶寫法
import * as exp from "./export3.js";
console.log(exp.a, exp.b);

console.log(name, age, gender);
// console.log(a, b, c, d);

// 對於 export default 寫法導出的
// import exp4 from "./export4.js";
// console.log(exp4.a, exp4.add(5, 6));
// 混合引入方式: 引入所有的 與 單獨引入取別名
import exp4, { add as plus } from "./export4.js";

// 使用時:
console.log(m);

console.log(mm);

console.log(add(10, 20)); //30

console.log(Stu);

// 類使用時須實例化
let s = new Stu();
console.log(s.show());

// 測試: ES6 不能用 node xx.js 來執行
>>>>>>> 5bdc84dd5ad320152935e4fedc4d67af63a9e326
