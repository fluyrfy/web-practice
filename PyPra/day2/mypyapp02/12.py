# Python 中, 變量的作用域分為四類: 簡稱LEGB

# Local

age = 20 #全局作用域 Global

def outer():
  age = 200 #嵌入(閉包)作用域變量 Embeded
  def inner():
    #age = 10  #本地、局部作用域 Local
    print(age)
  return inner()
# inner()

#Python解釋器提供內置函數list 內置作用域 Built-in

#print(age)
