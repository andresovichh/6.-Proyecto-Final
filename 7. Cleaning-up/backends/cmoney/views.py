from django.shortcuts import render

# Create your views here.
def index(request):
    """ to return the homepage"""
    return render(request, "index.html")

def login(request):
    """ returns login page"""
    return render(request, "login.html")

def register(request):
    """ returns register page"""
    return render(request, "register.html")