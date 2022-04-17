<?php
// 匿名函數又被稱作閉包函數
$add = function (int $a, int $b): int {
  $sum = $a + $b;
  return $sum;
};

$sumFun = call_user_func($add, 1, 5);

function multi(int $a, int $b): int {
  return $a * $b;
}

$add = 'multi'; //重新將相乘函數附值給 $add

// 匿名函數能夠打破作用域直接使用上下文變量
$n1 = 1;
$n2 = 2;
$add = function () use ($n1, $n2) {
  return $n1 + $n2;
};
