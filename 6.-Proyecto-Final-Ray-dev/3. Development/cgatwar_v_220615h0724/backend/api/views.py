'''Generates api views'''
from rest_framework import viewsets, permissions
from .serializers import CustomersSeria
from cmoney.models import Customers, GasStations, Pump, Transactions


class CustomersList(viewsets.ModelViewSet):
    '''Customer JSON generator'''
    serializer_class = CustomersSeria
    permission_classes = [permissions.IsAuthenticated]
    queryset = Customers.objects.all()
    serializer_class = CustomersSeria

    def perform_create(self, serializer):
        '''Sets the user for the creation of customer'''
        serializer.save(user=self.request.user)