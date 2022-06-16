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
