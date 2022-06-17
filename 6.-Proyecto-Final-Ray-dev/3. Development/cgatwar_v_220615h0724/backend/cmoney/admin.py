'''Module with classes for admin'''
from django.contrib import admin

from cmoney.models import Customers, GasStations, Pump, Transactions


admin.site.register(Customers)
admin.site.register(GasStations)
admin.site.register(Pump)
admin.site.register(Transactions)
