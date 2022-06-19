'''Module with classes for admin'''
from django.contrib import admin

from cmoney.models import GasStations, Pump, Transactions


admin.site.register(GasStations)
admin.site.register(Pump)
admin.site.register(Transactions)
