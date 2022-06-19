'''Generates api views'''
from rest_framework import viewsets, permissions
from .serializers import GasSeria, Pump, PumpSeria, TranSeria
from cmoney.models import GasStations, Pump, Transactions


class GasList(viewsets.ModelViewSet):
    '''Gas JSON generator'''
    permission_classes = [permissions.IsAuthenticated]
    queryset = GasStations.objects.all()
    serializer_class = GasSeria

    def get_queryset(self):
        '''Filtering by user'''
        user = self.request.user
        return GasStations.objects.filter(user=user).order_by('-created_gs')

    def perform_create(self, serializer):
        '''Sets the user for the creation of gasstation'''
        serializer.save(user=self.request.user)


class PumpList(viewsets.ModelViewSet):
    '''Pump JSON generator'''
    permission_classes = [permissions.IsAuthenticated]
    queryset = Pump.objects.all()
    serializer_class = PumpSeria

    def get_queryset(self):
        '''Filtering by user'''
        user = self.request.user
        return Pump.objects.filter(user=user).order_by('-created_pump')

    def perform_create(self, serializer):
        '''Sets the user for the creation of pumps'''
        serializer.save(user=self.request.user)


class TranList(viewsets.ModelViewSet):
    '''Gas JSON generator'''
    permission_classes = [permissions.IsAuthenticated]
    queryset = Transactions.objects.all()
    serializer_class = TranSeria

    def get_queryset(self):
        '''Filtering by user'''
        user = self.request.user
        return Transactions.objects.filter(user=user).order_by('-created_tran')

    def perform_create(self, serializer):
        '''Sets the user for the creation of gasstation'''
        serializer.save(user=self.request.user)
