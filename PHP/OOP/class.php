<?php

class Car
{
  public function __construct()
  {

  }
  const WHEEL = 4;
  var $seats;
  var $doors;
  var $engine;
  var $brand;
}

if (class_exists('Car')) {
  echo 'class Car exists' . PHP_EOL;
} else {
  echo 'class Car not exists' . PHP_EOL;
}

$car = new Car();
var_dump(Car::WHEEL); // 訪問類常量通過::的方式

class Benz extends Car
{
  public function __construct($seats = 5, $doors = 4, $engine = 1)
  {
    $this->brand = '奔馳';
    parent::__construct($this->brand, $seats, $doors, $engine);
  }
}
