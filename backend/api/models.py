from django.db import models

# Create your models here.


class Expert(models.Model):
    isim = models.CharField(max_length=25)
    soyisim = models.CharField(max_length=25)
    iban = models.BigIntegerField()
    telefon = models.BigIntegerField()
    email = models.CharField(max_length=25, unique=True)


class Sigorta(models.Model):
    firma_adi = models.CharField(max_length=25)
    adres = models.CharField(max_length=100)
    telefon = models.BigIntegerField()
    email = models.CharField(max_length=25, unique=True)
