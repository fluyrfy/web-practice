<?php

// 兩數相加之和
// 若要引用值可在形參前加上 &
function add(int $a, int $b): int {
  $sum = $a + $b;
  return $sum;
}

$c = add(1, 3);
echo $c;
