#類內部靜態成員 static
class Emp:
  location = '中國' #類屬性 整類中只有一份
  def __init__(self, age):
    self.age = age  #實例屬性

e1 = Emp(20)
e2 = Emp(30)
print(e1.age)
print(e2.age)

e2.age = 50
print(e1.age)
print(e2.age)
