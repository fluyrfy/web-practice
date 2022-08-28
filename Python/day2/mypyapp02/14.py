#面向對象 繼承
#理論上 繼承的本質是 is a 的關係
#例如: Coder is a Emp
class Emp :
  def __init__(self, age, ename):
    print('一個EMP對象被構建了')
    # print(type(this))
    self.age = age
    self.ename = ename

  def printInfo(self):
    print('hello, my name is', self.ename)

class Coder (Emp): #Python中使用()表示繼承
  def __init__(self, age, ename, language):
    #調用父類構造方法
    super().__init__(age, ename)
    self.language = language

c3 = Coder(30, 'Scott', 'Java')
print(c3.age)
print(c3.ename)
c3.printInfo()


