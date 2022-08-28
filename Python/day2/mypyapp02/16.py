from _typeshed import Self


# shape: fillColor borderColor
# circle rectangle: r width height

class Shape:
  def __init__(self, fillColor, borderColor):
    self.fillColor = fillColor
    self.borderColor = borderColor
    print('一個Shape對象被構建了')
  def getSize(self):
    return 0
  def getPerimeter(self):
    return 0

class Circle(Shape):
  def __init__(self, fillColor, borderColor, r):
    super().__init__(fillColor, borderColor)
    self.r = r
    print('一個Circle對象被構建了')
  def getSize(self):
    return 3.14 * self.r * self.r
  def getPerimeter(self):
    return 2 * 3.14 * self.r

class Rectangle(Shape):
  def __init__(self, fillColor, borderColor, width, height):
    super().__init__(fillColor, borderColor)
    self.width = width
    self.height = height
    print('一個Rectangle對象被構建了')
  def getSize(self):
    return self.width * self.height
  def getPerimeter(self):
    return 2 * (self.width + self.height)

s1 = Shape('填充紅', '邊框黃')
print( s1.getSize() )
print( s1.getPerimeter() )

s1 = Circle('填充紅', '邊框黃', 10)
print( s1.getSize() )
print( s1.getPerimeter() )


s1 = Rectangle('填充紅', '邊框黃', 20, 30)
print( s1.getSize() )
print( s1.getPerimeter() )
