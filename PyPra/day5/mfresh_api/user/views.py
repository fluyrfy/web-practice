from django.db.models.query_utils import Q
from django.http import JsonResponse
# from django.http.request import _Q

from user.models import MfUser

def userLogin(req):
  #讀取請求數據
  nameOrPhone = req.GET.get('unameOrPhone')
  p = req.GET.get('upwd')
  #where (()and()) or (()and()) 郵箱加電話
  # MfUser.objects.filter(uname = nameOrPhone, upwd = p) | MfUser.objects.filter(phone = nameOrPhone, upwd = p)
  result = MfUser.objects.filter(Q(uname = nameOrPhone, upwd = p) | Q(phone = nameOrPhone, upwd = p)).values()
  if(len(result) > 0):
    u = result[0]
    data = {'code': 1, 'msg': '登入成功', 'uid': u}
  else:
    data = {'code': 2, 'msg': '用戶名或密碼錯誤'}
  #輸出響應消息
  res = JsonResponse(data)
  res['Access-Control-Allow-Origin'] = '*'
  return res

def userRegister(req):
  #讀取請求數據
  n = req.POST.get('uname') #請求主體數據:用戶名
  p = req.POST.get('upwd')
  h = req.POST.get('phone')
  print(n, p, h)
  #執行數據庫插入操作
  u = MfUser.objects.create(uname = n, upwd = p, phone = h)
  if(u):
    data = {'code': 200, 'uid': u.uid, 'uname': u.uname}
  else:
    data = {'code': 500}
  #輸出響應消息
  res = JsonResponse(data) #'dict'會被自動序列化
  res['Access-Control-Allow-Origin'] = '*'
  return res

def userCheckUname(req):
  #讀取請求數據
  uname = req.GET.get('uname')
  result = MfUser.objects.filter(uname = uname).values()
  if(len(result)>0):
    data = {'code': 1, 'msg': '用戶名已存在！'}
  else:
    data = {'code': 2, 'msg': '用戶名未存在！'}
  #輸出響應消息
  res = JsonResponse(data)
  res['Access-Control-Allow-Origin'] = '*'
  return res

def userCheckPhone(req):
  #讀取請求數據
  phone = req.GET.get('phone')
  result = MfUser.objects.filter(phone = phone).values()
  if(len(result) > 0):
    data = {'code': 1, 'msg': '電話已存在！'}
  else:
    data = {'code': 2, 'msg': '電話未存在！'}
  #輸出響應消息
  res = JsonResponse(data)
  res['Access-Control-Allow-Origin'] = '*'
  return res

