#使用第三方模塊連接MySQL數據庫

import mysql.connector
conn = mysql.connector.connect(
  host = '127.0.0.1',
  port = '3307',
  user = 'root',
  password = '',
  database = 'xz'
)
print(conn)
