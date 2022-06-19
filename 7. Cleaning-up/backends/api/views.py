'''Generates api views'''
from rest_framework import viewsets, permissions
from .serializers import GasSeria
from cmoney.models import GasStations, Pump, Transactions


class GasList(viewsets.ModelViewSet):
    '''Gas JSON generator'''
    serializer_class = GasSeria
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
