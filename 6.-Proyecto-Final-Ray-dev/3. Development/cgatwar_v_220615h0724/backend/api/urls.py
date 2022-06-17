'''Module that lists apis urls'''
from django.urls import include, path
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register('customers', views.CustomersList)

urlpatterns = [
    #path('customers/', views.CustomersList.as_view()),
    path('', include(router.urls)),
]
