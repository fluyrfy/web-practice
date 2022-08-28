print('main3啟動模塊開始運行')

#導入包下模塊中的成員
#import user.login.uname #錯誤
from user.login import uname, upwd

print('login:', uname)
print('register:', upwd)

from user.register import uname as rUname, upwd as rUpwd
print('register:', rUname)
print('register:', rUpwd)





