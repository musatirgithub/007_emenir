from django.shortcuts import render
from rest_framework import viewsets
from .models import KazaKaydi
from .serializers import KazaKaydiSerializer

# Create your views here.


class KazaKaydiView(viewsets.ModelViewSet):
    queryset = KazaKaydi.objects.all()
    serializer_class = KazaKaydiSerializer
