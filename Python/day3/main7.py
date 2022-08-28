import random

#生成0~1之間的隨機小數
n = random.random()

print( n )

#生成min~max間的隨機整數， 例1000~10000:
v = random.randrange(1000, 10000, 1)
print( v )

#從字符串數組中隨機取出一個元素
empList = ['亮亮', '然然', '咚咚', '滔滔']
e = random.choice( empList )
print( e )

#隨機打亂一個數組並返回
random.shuffle(empList)
print(empList)
