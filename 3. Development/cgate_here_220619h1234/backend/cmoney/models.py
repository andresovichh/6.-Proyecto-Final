'''Module with models of db tables'''
from django.db import models
from django.contrib.auth.models import User


class GasStations(models.Model):
    '''
    Class gasstations. Vars are:
        name. varchar(120)
        address. varchar(240)
        date_creation. datetime
        date_update. datetime
    '''
    name = models.CharField(max_length=120)
    address = models.CharField(max_length=400)
    created_gs = models.DateTimeField(auto_now=True)
    updated_gs = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Pump(models.Model):
    '''
    Class pump. Vars are:
        name. varchar(120)
        wallet_id. varchar(560)
        wallet_name. varchar(45)
        date_creation. datetime
        date_update. datetime
    '''
    name = models.CharField(max_length=120)
    wallet_id = models.CharField(max_length=400)
    wallet_name = models.CharField(max_length=45)
    created_pump = models.DateTimeField(auto_now=True)
    updated_pump = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    gas_st = models.ForeignKey('GasStations', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Transactions(models.Model):
    '''
    Class transactions. Vars are:
        pump_id. ForeingKey
        trans_id. int
        cripto_id. varchar(1024)
        amount_uy. Float
        exchange. Float
        amount_cr. Float
        fee_cr. Float
        total. Float
        date_creation. datetime
        date_update. datetime
    '''
    pump_id = models.ForeignKey('Pump', on_delete=models.CASCADE)
    trans_id = models.IntegerField(default=0)
    cripto_id = models.CharField(max_length=1024)
    amount_uy = models.FloatField(default=0)
    exchange = models.FloatField(default=0)
    amount_cr = models.FloatField(default=0)
    fee_cr = models.FloatField(default=0)
    total = models.FloatField(default=0)
    created_tr = models.DateTimeField(auto_now=True)
    updated_tr = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.trans_id)
