# json

import json
from datetime import datetime as d

#dict
obj = {'uname': '叮噹', 'age': 20, 'isMarried': True,
#'birthday': d.now()
}  #Python中datetime不能序列化

s = json.dumps(obj) #JSON.stringify()
print(s)

#把自符串解析為對象--反序列化
obj = json.loads(s) #JSON.parse()
print(obj)
