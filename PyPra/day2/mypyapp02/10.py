def connect(host, user, pwd, port, dbname):
  print('正在連主機:', host)
  print('服務器端口號:', port)
  print('用戶名:', user)
  print('密碼:', pwd)
  print('數據庫名稱:', dbname)

#如果參數過多，往往不容易記住參數的順序
# connect('127.0.0.1', 3306, 'xz')
#使用關鍵字參數
connect(host='127.0.0.1', port=3306, dbname='xz', user='Frank', pwd=1234)
