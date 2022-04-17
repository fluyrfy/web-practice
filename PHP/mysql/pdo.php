<?php

// 設置連接屬性

$dsn = "mysql:host=127.0.0.1;port=3307;dbname=note_blog;charset=utf8mb4";
$user = 'root';
$pass = '';

try {
  // 建立連接
  $pdo = new PDO($dsn, $user, $pass);
  // 執行SQL查詢
  $sql = $pdo->quote("SELECT * FROM `article`");
  $res = $pdo->query($sql);
  // 打印查詢結果
  echo '<pre>';
  foreach ($res as $row ) {
    print_r($row);
  }
} catch (PDOException $exception) {
  //throw $th;
  printf("Error: %s\n", $exception->getMessage());
} finally {
  // 釋放PDO連接實例
  $pdo = null;
}
