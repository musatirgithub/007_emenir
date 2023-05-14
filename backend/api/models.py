from django.db import models

# Create your models here.


class Expert(models.Model):
    isim = models.CharField(max_length=25)
    soyisim = models.CharField(max_length=25)
    iban = models.CharField(max_length=26, blank=True, null=True)
    telefon = models.BigIntegerField()
    email = models.CharField(max_length=25, unique=True)


class Sigorta(models.Model):
    firma_adi = models.CharField(max_length=25)
    adres = models.CharField(max_length=100)
    telefon = models.BigIntegerField()
    email = models.CharField(max_length=25, unique=True)


class Araci(models.Model):
    calistigi_sirket = models.CharField(max_length=50)
    kimlik_no = models.CharField(max_length=11, blank=True, null=True)
    isim = models.CharField(max_length=25)
    soyisim = models.CharField(max_length=25)
    iban = models.CharField(max_length=26, blank=True, null=True)
    telefon = models.BigIntegerField()
    email = models.CharField(max_length=25, unique=True)
