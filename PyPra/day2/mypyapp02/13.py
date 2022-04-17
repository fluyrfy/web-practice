#面向對象 封裝
class Emp :
  def __init__(self, age, ename):
    print('一個EMP對象被構建了')
    # print(type(this))
    self.age = age
    self.ename = ename

  def printInfo(self):
    print('hello, my name is', self.ename)

#創建類的實例(創建對象)

e1 = Emp(25, 'King')
print(e1.age, e1.ename)
e1.printInfo()
e2 = Emp(22, 'Jerry')
print(e2.age, e2.ename)
e2.printInfo()
