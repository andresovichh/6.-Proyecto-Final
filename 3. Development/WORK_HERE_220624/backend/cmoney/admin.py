'''Register classes in admin webpage'''
from django.contrib import admin
from .models import GasStations, Pump, Transactions


admin.site.register(GasStations)
admin.site.register(Pump)
admin.site.register(Transactions)
