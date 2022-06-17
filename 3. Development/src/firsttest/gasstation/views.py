from django.shortcuts import render, get_object_or_404, redirect
from .models import Gasstation
from .forms import GassstationCreateForm, RawProductForm
# Create your views here.
# functions are not classes
def gasstation_detail_view(request):
    obj = Gasstation.objects.get(id=1)
    # context = {
    #     'title': obj.name,
    #     'description': obj.location
    # }
    context = {
        'object': obj
    }
    return render(request, "gasstations/gasstation_detail.html", context)

# def gasstation_create_form(request):
#     form = GassstationCreateForm(request.POST or None)
#     if form.is_valid():
#         form.save()
#         # rerender the form here
#         form = GassstationCreateForm()
#     context = {
#         'form': form
#     }
#    return render(request, "gasstations/gasstation_create.html", context)

def gasstation_create_form(request):
    my_form = RawProductForm()
    if request.method == "POST":
        my_form = RawProductForm(request.POST)
        if my_form.is_valid():
            # now the data is good
            print(my_form.cleaned_data)
            # you pass kwargs to affect the db
            Gasstation.objects.create(**my_form.cleaned_data)
        else:
            print(my_form.errors)
    # print("GET IS :------------ {}".format(request.GET))
    # print("POST IS---------------- {}".format(request.POST))
    context = {
        "form": my_form
    }
    return render(request, "gasstations/gasstation_create.html", context)

def gasstation_list_view(request):
    queryset = Gasstation.objects.all()
    context = {
        "object_list": queryset
    }
    return render(request, "gasstations/gasstation_list.html", context)


def index(request):
    return render(request, 'firsttest/index.html')