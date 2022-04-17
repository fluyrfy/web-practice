"""mydjproject01 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.http.response import HttpResponse
from django.urls import path

# #路由方法 - view
# def doLogin(req):
#   print('server accept one http request, handle this function')
#   res = HttpResponse('<h2>Welcome</h2><hr>')
#   return res

# def doRegister(req):
#   print('somone register succ')
#   res = HttpResponse('<h2>Register succ</h2>')
#   return res

# def index(req):
#   print('this is index')
#   res = HttpResponse('<p>index page</p>')
#   return res

# #路由辭典
# urlpatterns = [
#     path('', index),
#     path('admin/', admin.site.urls),
#     path('login/', doLogin),
#     path('register/', doRegister),
# ]
from user.views import userLogin as login
from user.views import userRegister as register
from product.views import productList as plist, productDetail as pdetail
urlpatterns = [
  path('user/login', login),
  path('user/register', register),
  path('product/list', plist),
  path('product/detail/<pid>', pdetail),
]
