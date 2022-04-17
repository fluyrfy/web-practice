# 九九乘法表
i = 1
# while(i <= 9):
#   j = 1
#   while(j <= i):
#     print(i, '*', j , '=', i*j, end=' ')
#     j += 1
#   print()
#   i += 1

for i in range(10):
  for j in range(1, i+1):
    print(i, '*', j, '=', i*j)
    j += 1
  i += 1
