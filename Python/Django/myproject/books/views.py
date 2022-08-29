import datetime
from multiprocessing import context
from multiprocessing.spawn import import_main_path
import re
from urllib import response
from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from django.views.generic import TemplateView, RedirectView
from django.shortcuts import redirect

# Create your views here.
# 定義視圖函數
def hello(request):
    return HttpResponse("<h1>Hello world!</h1>")
    # return redirect_stderr("http://www.sina.com")


# 定義類基礎試圖
class MyView(View):
    def get(self, request):
        return HttpResponse("<h1>Hello world!</h1>")


# def show_book_id(request, book_id):
#     s = "<h3>您選擇的圖書編號:{0}</h3>".format(book_id)
#     return HttpResponse(s)


# 定義函數視圖 str路徑轉換器
def hello1(request, name):
    s = "<h3>hello {0}!</h3>".format(name)
    return HttpResponse(s)


# 定義函數視圖 slug路徑轉換器
def hello2(request, name):
    s = "<h3>hello {0}!</h3>".format(name)
    return HttpResponse(s)


# 定義函數視圖 uuid路徑轉換器
def hello3(request, name):
    s = "<h3>hello {0}!</h3>".format(name)
    return HttpResponse(s)


# 定義函數視圖 path路徑轉換器
def hello4(request, name):
    s = "<h3>hello {0}!</h3>".format(name)
    return HttpResponse(s)


# 定義函數視圖 int路徑轉換器
def show_book_id(request, book_id):
    s = "<h3>您選擇的圖書顛號: {0}!</h3>".format(book_id)
    price = 50.89
    if book_id == 123:
        price = 35.69

    return redirect("book_price", price=price)
    # return HttpResponse(s)


def show_book_price(request, price):
    s = "<h3>圖書價格: ${0}</h3>".format(price)
    return HttpResponse(s)


# class MyRedirectView(MyRedirectView):
#     pattern_name = "book_info"


def show_book_info(request, info):
    s = "<h3>圖書資訊: ${0}</h3>".format(info)
    return HttpResponse(s)


# 使用模板
def show_book_info2(request):
    context = {"book_name": "Python從零開始", "author": "Frank Liao"}
    return render(request, "book.html", context)


class MyTemplateView(TemplateView):
    template_name = "book.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # context = {}
        context["book_name"] = "Python之路有你有我"
        context["author"] = "Frank Liao"
        return context


def show_book_price1(request, price):
    info = """
  書名: <<Python 從小白道大牛>>
  """
    context = {"info": info, "price": float(price)}
    return render(request, "book_info.html", context)


def show_book_info1(request):
    book1 = {"bookname": "Python從零開始", "author": "Frank Liao"}
    book2 = {"bookname": "JS從零開始", "author": "Frank Liao"}
    book3 = {"bookname": "Laravel從零開始", "author": "Frank Liao"}

    list = []
    list.append(book1)
    list.append(book2)
    list.append(book3)

    return render(request, "")


def login(request):
    return render(request, "login.html")


def index(request):
    return render(request, "login.html")


def singup(request):
    if request.method == "POST":
        datas = request.POST
        print(datas["userid"])
        print(datas["userpwd"])
        return render(request, "result.html", {"result": datas})
    else:
        return render(request, "signup.html")


# 設置Cookie
def index(request):
    response = HttpResponse("<h3>設置Cookie</h3>")
    # timeoutdate = datetime.datetime.today() + datetime.timedelta(days=10)
    # response.set_cookie("userid", "tony", expires=timeoutdate)
    response.set_cookie("userid", "tony", max_age=60)
    return response


# 取出Cookie
def show_cookie(request):
    name = request.COOKIES.get("userid")
    response = HttpResponse("<h3>Cookies中的userid:" + str(name) + "</h3>")
    return response


def login(request):
    if request.method == "POST":
        userid = request.POST["userid"]
        request.session["userid"] = userid
    return render(request, "result.html")


def logout(request):
    if request.session.has_key("userid"):
        del request.session["userid"]
    return render(request, "result.html")
