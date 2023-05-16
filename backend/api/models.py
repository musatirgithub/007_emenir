from django.db import models
from users.models import Profile

# Create your models here.


class Expert(models.Model):
    isim = models.CharField(max_length=25)
    soyisim = models.CharField(max_length=25)
    iban = models.CharField(max_length=26, blank=True, null=True)
    telefon = models.BigIntegerField()
    email = models.CharField(max_length=25, unique=True, blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.isim} {self.soyisim}"

    class Meta:
        verbose_name = "Expert"
        verbose_name_plural = "Expertler"


class Sigorta(models.Model):
    firma_adi = models.CharField(max_length=25)
    adres = models.CharField(max_length=100, blank=True, null=True)
    telefon = models.BigIntegerField(blank=True, null=True)
    email = models.CharField(max_length=25, unique=True, blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.firma_adi}"

    class Meta:
        verbose_name = "Sigorta"
        verbose_name_plural = "Sigortalar"


class Araci(models.Model):
    calistigi_sirket = models.CharField(max_length=50, blank=True, null=True)
    kimlik_no = models.CharField(max_length=11, blank=True, null=True)
    isim = models.CharField(max_length=25)
    soyisim = models.CharField(max_length=25)
    iban = models.CharField(max_length=26, blank=True, null=True)
    telefon = models.BigIntegerField()
    email = models.CharField(max_length=25, unique=True, blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.isim} {self.soyisim}"

    class Meta:
        verbose_name = "Araci"
        verbose_name_plural = "Aracilar"


class Arac(models.Model):
    plaka = models.CharField(max_length=11)
    marka = models.CharField(max_length=25)
    model = models.CharField(max_length=25)
    yil = models.SmallIntegerField(blank=True, null=True)
    sigorta = models.ForeignKey(
        Sigorta, on_delete=models.SET_NULL, blank=True, null=True)
    sigorta_no = models.IntegerField()

    def __str__(self) -> str:
        return f"{self.plaka} {self.marka} {self.model}"

    class Meta:
        verbose_name = "Arac"
        verbose_name_plural = "Araclar"


class AnlasmaModeli(models.Model):
    model_adi = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f"{self.model_adi}"

    class Meta:
        verbose_name = "AnlasmaModeli"
        verbose_name_plural = "AnlasmaModelleri"


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
    kaza_tarihi = models.DateField(blank=True, null=True)
    sigorta = models.ForeignKey(
        Sigorta, on_delete=models.SET_NULL, blank=True, null=True)
    anlasma_modeli = models.ForeignKey(
        AnlasmaModeli, on_delete=models.SET_NULL, blank=True, null=True)
    asama = models.CharField(
        max_length=1, choices=ASAMA, blank=True, null=True)
    asama_tarihi = models.DateField()
    profil = models.ForeignKey(
        Profile, on_delete=models.SET_NULL, blank=True, null=True)
    expert = models.ForeignKey(
        Expert, on_delete=models.SET_NULL, blank=True, null=True)
    tahmini_deger_kaybi = models.PositiveIntegerField(blank=True, null=True)

    def __str__(self) -> str:
        return f"{self.profil.isim} {self.profil.soyisim} {self.arac.plaka} {self.kaza_tarihi}"

    class Meta:
        verbose_name = "KazaKaydi"
        verbose_name_plural = "KazaKayıtları"
