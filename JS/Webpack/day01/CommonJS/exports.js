<<<<<<< HEAD
// node.js 實現的 CommonJS 規範, 模塊化導出兩種寫法
// 特點: 最終只能向外導出一個對象

var m = 123;

let addx = function (n1, n2) {
  return n1 + n2;
};

// 導出一個對象
// module.exports = {
//   m: m,
//   addx: addx,
// };

//
// module.exports.m = m;
// module.exports.addx = addx;

exports.m = m;
exports.addx = addx;
=======
// node.js 實現的 CommonJS 規範, 模塊化導出兩種寫法
// 特點: 最終只能向外導出一個對象

var m = 123;

let addx = function (n1, n2) {
  return n1 + n2;
};

// 導出一個對象
// module.exports = {
//   m: m,
//   addx: addx,
// };

//
// module.exports.m = m;
// module.exports.addx = addx;

exports.m = m;
exports.addx = addx;
>>>>>>> 5bdc84dd5ad320152935e4fedc4d67af63a9e326
