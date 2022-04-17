<?php
$a = 32;
$b = 8;

$n1 = $a + $b;
$n2 = $a % $b;
$n3 = $b % $a;

printf('%d + %d = %d ', $a, $b, $n1);
printf('%d %% %d = %d ', $a, $b, $n2);
printf('%d %% %d = %d ', $b, $a, $n3);
