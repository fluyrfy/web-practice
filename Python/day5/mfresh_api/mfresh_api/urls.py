
from django.contrib import admin
from django.urls import path
from user.views import userLogin, userRegister, userCheckUname, userCheckPhone
from news.views import newsList, newsDetail

#測試用路由處理方法
from django.http import HttpResponse
from user.models import MfUser

def testInsert(req):
  #ORM框架提供的數據庫操作映射對象
  # print(MfUser.objects)
  u = MfUser.objects.create(uname = 'Frank', upwd = '888', phone = '13501111117')
  # print(type(result))
  print(u.uname, u.upwd, u.phone)
  res = HttpResponse('正在測試Insert...')
  return res
def testDelete(req):
  # d = MfUser.objects.delete()
  result = MfUser.objects.filter(uid = 3).delete()
  print(result)
  res = HttpResponse('正在測試Delete...')
  return res
def testUpdate(req):
  result = MfUser.objects.filter(uid = 2).update(uname = 'yayaya', upwd = '666')
  print(result)
  res = HttpResponse('正在測試Update...')
  return res
def testSelectOne(req):
  r = MfUser.objects.filter(uid = 4).values()
  print(r)
  res = HttpResponse('正在測試SelectOne...')
  return res
def testSelectAll(req):
  rall = MfUser.objects.values()
  print(rall)
  res = HttpResponse('正在測試SelectAll...')
  return res

urlpatterns = [
    path('test/insert', testInsert),
    path('test/delete', testDelete),
    path('test/update', testUpdate),
    path('test/select/one', testSelectOne),
    path('test/select/all', testSelectAll),


    path('admin/', admin.site.urls),
    path('user/login', userLogin),
    path('user/register', userRegister),
    path('user/check/uname', userCheckUname),
    path('user/check/phone', userCheckPhone),

    path('news/list', newsList),
    path('news/detail', newsDetail),
]
