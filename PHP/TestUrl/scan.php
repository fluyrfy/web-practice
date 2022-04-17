<?php
// 使用composer自動加載器
require 'vendor/autoload.php';

// 實例Guzzle Http 客戶端
$client = new GuzzleHttp\Client();

// 打開並迭代處理csv
$csv = League\Csv\Reader::createFromPath($argv[1]);
foreach ($csv as $csvRow ) {
  try {
    // 發送HTTP GET請求
    $httpResponse = $client->get($csvRow[0]);

    // 檢查HTTP響應的狀態碼
    if ($httpResponse->getStatusCode() >= 400) {
      throw new Exception();
    }
  } catch (Exception $e) {
    // 把死連接發給標準輸出
    echo $csvRow[0] . PHP_EOL;
  }
}
