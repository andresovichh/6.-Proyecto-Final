'''Module that lists apis urls'''
from django.urls import include, path
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
# router.register('test', views.index)

urlpatterns = [
    path('', views.index, name="index"),
    path('login/', views.login, name="login"),
    path('register/', views.register, name="register")
]