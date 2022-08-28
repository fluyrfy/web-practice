#面向對象 多態
class Emp :
  def __init__(self, age, ename):
    print('一個EMP對象被構建了')
    # print(type(this))
    self.age = age
    self.ename = ename

  def printInfo(self):
    print('員工姓名:', self.ename, '員工年齡:', self.age )

class Coder (Emp): #Python中使用()表示繼承
  def __init__(self, age, ename, language):
    #調用父類構造方法
    super().__init__(age, ename)
    self.language = language

  #子類重寫/覆蓋父類的同名方法
  def printInfo(self):
      print('員工姓名', self.ename, '員工年齡', self.age, '擅長的語言', self.language)

c3 = Coder(30, 'Scott', 'Java')
# print(c3.age)
# print(c3.ename)
c3.printInfo()




