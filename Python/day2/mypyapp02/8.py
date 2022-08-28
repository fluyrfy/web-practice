# #使用python中的函數
#默認值參數
def add( *nums ):
  # print(type(nums))
  # # print(sum)
  # print(nums)
  sum = 0
  for n in nums:
    sum += n
  return sum


#調用函數
add()
add(10)
add(10, 20, 30, 40, 50)
