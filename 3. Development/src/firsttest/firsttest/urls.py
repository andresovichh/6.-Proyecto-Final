"""firsttest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls import path
from pages.views import contact_view
from pages.views import login_view
from pages.views import signup_view
from pages.views import home_view
from pages.views import usrhome_view
from gasstation.views import gasstation_detail_view, gasstation_create_form, gasstation_list_view, index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view, name='home'),
    path('home/', home_view, name='home'),
    path('contact/', contact_view),
    path('login/', login_view),
    path('signup/', signup_view),
    path('usrhome/', usrhome_view),
    path('detail_view/', gasstation_detail_view),
    path('create/', gasstation_create_form),
    path('gasstations/', gasstation_list_view, name='product-list'),
    path('new_html/', index, name="index")

]