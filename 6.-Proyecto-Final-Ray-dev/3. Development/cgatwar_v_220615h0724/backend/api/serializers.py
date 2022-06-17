''' Module that serialize'''
from rest_framework import serializers
from cmoney.models import Customers, GasStations, Pump, Transactions


class CustomersSeria(serializers.ModelSerializer):
    '''Class that seraialize customer class'''

    class Meta:
        '''Serialization list'''
        model = Customers
        fields = ['id', 'name', 'email_cust', 'created_cust', 'updated_cust', 'user_id']
