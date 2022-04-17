# python數組類型
# set集合
from typing import Set


myList = ['希拉蕊', '布希', '川普', '布希']

print(myList)

# 把list強制轉換為Set
mySet = set(myList)
print(type(mySet))
print(mySet)

mySet = {'克靈頓', '希拉蕊', '布希', '華盛頓'}
print(mySet)

# 添加新元素
mySet.add('肯尼迪')
print(mySet)

# 刪除元素
mySet.remove('希拉蕊')
print(mySet)
