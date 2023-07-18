from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import render
from rest_framework import viewsets
from .models import Expert, Sigorta, Araci, Arac, AnlasmaModeli, KazaKaydi, SigortaAvukati
from .serializers import ExpertSerializer, SigortaAvukatiSerializer, SigortaSerializer, AraciSerializer, AracSerializer, AnlasmaModeliSerializer, KazaKaydiSerializer
from rest_framework.permissions import IsAdminUser
from .permissions import IsAdminOrReadOnly

# Create your views here.


class ExpertView(viewsets.ModelViewSet):
    queryset = Expert.objects.all()
    serializer_class = ExpertSerializer
    permission_classes = (IsAdminUser,)

class SigortaAvukatiView(viewsets.ModelViewSet):
    queryset = SigortaAvukati.objects.all()
    serializer_class = SigortaAvukatiSerializer
    permission_classes = (IsAdminUser,)


class SigortaView(viewsets.ModelViewSet):
    queryset = Sigorta.objects.all()
    serializer_class = SigortaSerializer
    permission_classes = (IsAdminUser,)


class AraciView(viewsets.ModelViewSet):
    queryset = Araci.objects.all()
    serializer_class = AraciSerializer
    permission_classes = (IsAdminOrReadOnly,)


class AracView(viewsets.ModelViewSet):
    queryset = Arac.objects.all()
    serializer_class = AracSerializer
    permission_classes = (IsAdminUser,)


class AnlasmaModeliView(viewsets.ModelViewSet):
    queryset = AnlasmaModeli.objects.all()
    serializer_class = AnlasmaModeliSerializer
    permission_classes = (IsAdminUser,)


class KazaKaydiView(viewsets.ModelViewSet):
    queryset = KazaKaydi.objects.all()
    serializer_class = KazaKaydiSerializer
    permission_classes = (IsAdminOrReadOnly,)
    # filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    # filterset_fields = ['user.first_name','user.last_name']
    # search_fields = ['user.first_name','user.last_name']

    def get_queryset(self):
        queryset = super().get_queryset()
        if not self.request.user.is_staff:
            queryset = queryset.filter(user=self.request.user)
        return queryset
