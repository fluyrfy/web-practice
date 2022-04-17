# 返回一個數組之間所有的閏年
def getLeapYears(start=2000 , end=2100):
  years = [] #list
  for y in range(start, end, 1):
    if((y%400==0)or((y%4==0)and(y%100!=0))):
      years.append(y)
  return years

myList = getLeapYears()
print(myList)
myList2 = getLeapYears(end = 3000, start = 2000)
print(myList2)

#返回數組，其中包含指定範圍之間所有的質數
def getPrimeNumber(start = 2, end = 100):
  nums = []
  for n in range(start, end, 1):
    #如果n是質數 則放入nums
    i = 2

    while(i < n):
      if(n%i == 0):
        break
      i += 1
    if(i >= n):
      nums.append(n)
  return nums

