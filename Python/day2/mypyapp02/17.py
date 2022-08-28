#只能在類內部使用的成員
class Emp:
  def __init__(self, age):
    self.__age = age
  def printAge(self):
    print(self.__age)

e = Emp(30)
# e.__age = 28   #無效的賦值
e.printAge()
