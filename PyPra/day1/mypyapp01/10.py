newList = []
n1 = {
  'nid': 101,
  'title': '標題一',
  'pubTime': 0
}
n2 = {
  'nid': 101,
  'title': '標題一',
  'pubTime': 0
}
n3 = {
  'nid': 101,
  'title': '標題一',
  'pubTime': 0
}
newList.append(n1)
newList.append(n2)
newList.append(n3)
# print(newList)

for i in range(0,len(newList),1):
  print(newList[i]['nid'])
  print(newList[i]['title'])
  print(newList[i]['pubTime'])

print('程序結束')
