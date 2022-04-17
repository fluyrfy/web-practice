<?php

$host = '127.0.0.1';
$port = 3307;
$user = 'root';
$password = '';
$dbname = "note_blog";

$conn = mysqli_connect($host, $user, $password, $dbname, $port);
mysqli_set_charset($conn, 'utf8mb4');

$sql = 'SELECT * FROM `article`';
$res = mysqli_query($conn, $sql);

$rows = mysqli_fetch_all($res, MYSQLI_ASSOC);
echo '<pre>';
var_dump($rows);


