'''Module that lists apis urls'''
from django.urls import include, path
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register('gas', views.GasList)
router.register('pump', views.PumpList)
router.register('tran', views.TranList)

urlpatterns = [
    path('', include(router.urls)),
]
