empList = []



while(True):
  emp = input('請輸入下一個員工姓名')
  if(emp == 'end'):
    break
  empList.append(emp)

print('寫入完成')

# i = 0
# while(i < len(empList)):
#   print(empList[i])
#   i += 1

for e in empList:
  print(e)

print('系統退出')
