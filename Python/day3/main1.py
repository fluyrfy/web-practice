print('main1啟動模塊開始運行')

#導入m1模塊中的成員
#import './m1'  #不需要引號
# import m1  #文件名就是模塊名
# import m1.age 錯誤寫法


# from m1 import age
# from m1 import printAge
# # print(m1.age)
# print(age)
# # m1.printAge()
# printAge()


#導入m1模塊內部的成員 並取別名
from m1 import age as a
print(a)
print('當前模塊的名稱:', __name__)
