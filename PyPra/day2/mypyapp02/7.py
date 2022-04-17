# #使用python中的函數
#默認值參數
def add(n1, n2=200):
  sum = n1 + n2
  # print(sum)
  return sum

#調用函數
result = add(10, 20)
print(result)
