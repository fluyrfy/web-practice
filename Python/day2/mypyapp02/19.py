# 請用戶輸入兩個數字， 程序計算出數字的商， 輸出在屏幕上

from typing import final


try:
  n1 = input('請輸入被除數:')
  n1 = int(n1)
  if(n1<0):
    raise Exception('被除數不能小於0') #手工拋出錯誤
  n2 = input('請輸入除數:')
  n2 = int(n2)
  if(n2<0):
    raise Exception('除數不能小於0') #手工拋出錯誤
  n3 = n1 / n2

  print('兩個數的商為:', n3)
except ValueError as e:
  print('您輸入的數字格式非法')
  print(e)
except ZeroDivisionError as e:
  print('除數不能為零')
  print(e)
except Exception as e:  #捕捉所有異常
  print('發生了運行異常')
  print(e)
finally:  #無論異常發生與否都要執行
  print('===程式運行結束===')
