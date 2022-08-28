print('m1模塊的一個對象創建了...')

age = 21
def printAge():
  print('m1:age', age)

def add():
  return age + 1


# 為了檢測當前模塊正常與否，需要測試--白盒測試
if(__name__ == '__main__'):
  result = add()
  print('白盒測試結果:', result)

print('m1當前模塊的名稱:', __name__)
