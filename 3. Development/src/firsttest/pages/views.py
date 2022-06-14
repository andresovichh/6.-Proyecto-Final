from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request, *args, **kwargs):
    print(args, kwargs)
    print(request.user)
    return render(request, "home.html", context={})

def contact_view(request, *args, **kwargs):
    my_context = {
        "my_text" : "This is my contact",
        "my_number" : 1232,
        "my_list" : ["hola", 1, "chau"]
    }
    return render(request, "contact.html", my_context)


def login_view(request, *args, **kwargs):
    return render(request, "login.html", context={})

def signup_view(request, *args, **kwargs):
    return render(request, "signup.html", context={})

def usrhome_view(request, *args, **kwargs):
    return render(request, "usrhome.html", context={})