print('rectangle模塊實例被創建了')

w = 20
h = 10

def getSize():
  return w * h

def getPerimeter():
  return 2 * (w + h)


#單元測試
if(__name__ == '__main__'):
  print('===rectangle模塊測試===')
  print( getSize() )
  print( getPerimeter() )
