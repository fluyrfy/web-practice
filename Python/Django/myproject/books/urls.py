from atexit import register
from django.urls import path, re_path
from . import views


urlpatterns = [
    path("hello/", views.hello),
    path("hello1/<str:name>", views.hello1, name="hello1"),
    path("hello2/<slug:name>", views.hello2),
    path("hello3/<uuid:name>", views.hello3),
    path("hello4/<path:name>", views.hello4),
    path("show_book_id/<int:book_id>", views.show_book_id),
    path("myviews/", views.MyView.as_view()),
    path("show_book_price/<price>", views.show_book_price, name="book_price"),
    path("show_book_info/<info>", views.show_book_info, name="book_info"),
    # re_path("^id/(?P<book_id>[a-zA-Z0-9]{4})/$", views.show_book_id),
    path("info2/", views.show_book_info2),
    path("my-template-view/", views.MyTemplateView.as_view()),
    path("price/<int:price>", views.show_book_price1, name="book_price1"),
    path("login/", views.login),
    path("", views.index),
]
