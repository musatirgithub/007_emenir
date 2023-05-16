from rest_framework import serializers
from .models import Expert, Sigorta, Araci, Arac, AnlasmaModeli, KazaKaydi


class ExpertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expert
        fields = (
            "id",
            "isim",
            "soyisim",
            "iban",
            "telefon",
            "email",
        )


class SigortaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sigorta
        fields = (
            "id",
            "firma_adi",
            "adres",
            "telefon",
            "email",
        )


class AraciSerializer(serializers.ModelSerializer):
    class Meta:
        model = Araci
        fields = (
            "id",
            "calistigi_sirket",
            "kimlik_no",
            "isim",
            "soyisim",
            "iban",
            "telefon",
            "email",
        )


class AracSerializer(serializers.ModelSerializer):
    class Meta:
        model = Arac
        fields = (
            "id",
            "plaka",
            "marka",
            "model",
            "yil",
            "sigorta",
            "sigorta_no",
        )


class AnlasmaModeliSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnlasmaModeli
        fields = (
            "id",
            "model_adi",
        )


class KazaKaydiSerializer(serializers.ModelSerializer):
    class Meta:
        model = KazaKaydi
        fields = (
            "id",
            "arac",
            "araci",
            "profil",
            "kaza_tarihi",
            "sigorta",
            "anlasma_modeli",
            "asama",
            "asama_tarihi",
            "profil",
            "expert",
            "tahmini_deger_kaybi",
        )
