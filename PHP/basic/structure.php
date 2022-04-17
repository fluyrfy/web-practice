<?php

$data = [
  '1' => [
    'id' => 1,
    'height' => 180,
    'weight' => 88
  ],
  '2' => [
    'id' => 2,
    'height' => 150,
    'weight' => 86
  ],
  '3' => [
    'id' => 3,
    'height' => 197,
    'weight' => 60
  ],
  '4' => [
    'id' => 4,
    'height' => 167,
    'weight' => 99
  ],
];

$total = count($data);
print_r($total,"資料總個數\n");
// echo PHP_EOL;
echo "資料總個數$total";
echo "資料總個數".$total;

// key 鍵  val 鍵值
foreach ($data as $key => $val) {
  echo "第${key}個學生的信息\n";
  print_r($val);
}
