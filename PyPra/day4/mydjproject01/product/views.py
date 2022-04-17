from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
def productList(req):
  # res = HttpResponse('<h3>Product List</h3>')
  # return res
  #向客戶端返回JSON響應
  data = {'ename':'dindin', 'isMarried': True }
  res = JsonResponse( data ) #此處會自動執行JSON序列化 把dict/list轉換為JSON字符串
  res['Access-Control-Allow-Origin'] = '*'
  return res

def productDetail(req, pid=999):
  print(type(pid))
  print(pid)
  res = HttpResponse('<h3>商品詳情</h3>')
  return res
