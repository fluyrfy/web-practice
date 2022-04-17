from django.http.response import JsonResponse
from .models import MfNews
from django.shortcuts import render
import math

# Create your views here.
def newsList(req):
  pno = int(req.GET.get('pageNum', 1)) #查詢分頁號
  output = {
    'totalRecord': 0, #總記錄數
    'pageSize': 10, #頁面大小
    'pageCount': 0,  #總頁數
    'pageNum': pno,  #當前顯示頁號
    'data': [],  #當前頁中數據
  }
  #執行數據庫查詢操作，獲得總記錄數
  count = MfNews.objects.count()
  output['totalRecord'] = count
  output['pageCount'] = math.ceil(output['totalRecord'] / output['pageSize'])
  #查詢指定頁面中的記錄 nid, title, pubtime order by pubtime desc limit ?, ?(按時間發布逆序)
  result = MfNews.objects.order_by('-pubtime').values('nid', 'title', 'pubtime')
  print(result)
  start = (output['pageNum'] - 1) * output['pageSize']
  end = output['pageNum'] * output['pageSize']
  result = list(result[start : end]) #QuerySet必須轉化為list才能序列化
  # result = MfNews.objects.values()
  output['data'] = result
  res = JsonResponse(output)
  res['Access-Control-Allow-Origin'] = '*'
  print(res)
  return res

def newsDetail(req):
  nid = req.GET.get('nid')
  result = MfNews.objects.filter(nid = nid).values()
  # print(result)
  news = result[0]
  res = JsonResponse(news)
  res['Access-Control-Allow-Origin'] = '*'
  return res
