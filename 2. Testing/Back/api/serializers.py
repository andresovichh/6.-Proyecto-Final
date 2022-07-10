''' Module that serialize'''
from rest_framework import serializers
from cmoney.models import GasStations, Pump, Transactions


class GasSeria(serializers.ModelSerializer):
    '''Class that seraialize gas class'''

    class Meta:
        '''Serialization list'''
        model = GasStations
        fields = [
            'id',
            'name',
            'address',
            'created_gs',
            'updated_gs',
            'user', 
        ]

class PumpSeria(serializers.ModelSerializer):
    '''Class that seraialize Pumps class'''

    class Meta:
        '''Serialization list'''
        model = Pump
        fields = [
            'id',
            'name',
            'wallet_name',
            'created_pump',
            'updated_pump',
            'user',
            'gas_st',
        ]


class TranSeria(serializers.ModelSerializer):
    '''Class that seraialize Pumps class'''

    class Meta:
        '''Serialization list'''
        model = Transactions
        fields = [
            'id',
            'pump_id',
            'cripto_id',
            'fuel',
            'liters',
            'amount_uy',
            'exchange',
            'mount_cr',
            'our_fe',
            'total',
            'created_tr',
            'updated_tr',
            'user',
            'status_tr',
        ]
