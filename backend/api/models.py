from django.db import models
from users.models import Profile

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


class Arac(models.Model):
    plaka = models.CharField(max_length=11)
    sigorta = models.CharField(max_length=50)
    sigorta_no = models.IntegerField()


class AnlasmaModeli(models.Model):
    model_adi = models.CharField(max_length=50)


class KazaKaydi(models.Model):
    ASAMA = (
        ("1", "Sigorta Şirketinden Değer Kaybı Talebi "),
        ("2", "Tahkim Komisyonunda Ön İnceleme"),
        ("3", "Tahkim Komisyon Heyetince İnceleme"),
        ("4", "Tutarın Sigorta Şirketince Ödenmesi"),
        ("5", "Süreç Tamamlandı")
    )
    arac = models.ForeignKey(
        Arac, on_delete=models.SET_NULL, blank=True, null=True)
    araci = models.ForeignKey(
        Araci, on_delete=models.SET_NULL, blank=True, null=True)
    profil = models.ForeignKey(
        Profile, on_delete=models.SET_NULL, blank=True, null=True)
    sigorta = models.ForeignKey(
        Sigorta, on_delete=models.SET_NULL, blank=True, null=True)
    anlasma_modeli = models.ForeignKey(
        AnlasmaModeli, on_delete=models.SET_NULL, blank=True, null=True)
    asama = models.PositiveSmallIntegerField(max_length=1, choices=ASAMA)
    asama_tarihi = models.DateField()
    profil = models.ForeignKey(
        Profile, on_delete=models.SET_NULL, blank=True, null=True)
    expert = models.ForeignKey(
        Expert, on_delete=models.SET_NULL, blank=True, null=True)
