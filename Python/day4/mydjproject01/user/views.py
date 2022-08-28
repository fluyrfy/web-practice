# from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def userLogin(req):
  print(req.GET) #QueryDict
  print(req.GET.get('uname','guest'))
  res = HttpResponse('<h3>User Login</h3>')
  return res

def userRegister(req):
  res = HttpResponse('<h3>User Register</h3>')
  return res
