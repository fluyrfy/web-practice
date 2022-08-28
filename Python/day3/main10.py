#http.client

import http.client

#向學子商城服務器發起HTTP請求
# 1.向目標服務器創建連接
conn = http.client.HTTPConnection('www.tmooc.cn')
conn.request('GET', '/')
#獲得響應消息
res = conn.getresponse()
print("響應狀態碼", res.status)
print("原因短句", res.reason)

#讀取響應主體
body = res.read();
print(body)
