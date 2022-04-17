#使用Python系統模塊_datetime

#導入模塊中成員
from datetime import datetime

#獲取當前系統日期時間
dt = datetime.now()
print(type(dt))
print(dt)

#把日期時間格式化為特殊的字符串
y = dt.year
m = dt.month
d = dt.day
h = dt.hour
mi = dt.minute
s = dt.second
print(y, '-', m, '-', d, ' ', h, ':', mi, ':', s, sep="")

#把日期時間格式化為特殊的字符串
s = dt.strftime('%Y-%m-%d %H:%M:%S')
print(s)

#把日期時間轉換為長整數
num = dt.timestamp()
print(type(num)) # class float
print(num)  #以秒為單位的浮點數 精確到微秒
print(int(num * 1000))  #以毫秒為單位的整數

#把長整數轉換為日期時間對象
dt = datetime.fromtimestamp(num)
print(dt)
