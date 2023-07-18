from rest_framework import serializers
from .models import Expert, Sigorta, Araci, Arac, AnlasmaModeli, KazaKaydi, SigortaAvukati
from rest_framework.validators import UniqueValidator
from dj_rest_auth.serializers import UserDetailsSerializer


class ExpertSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=Expert.objects.all())]
    )

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

class SigortaAvukatiSerializer(serializers.ModelSerializer):
    class Meta:
        model= SigortaAvukati
        fields = (
            "isim",
            "soyisim",
            "telefon",
            "email",
            "adres",
        )


class SigortaSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=Sigorta.objects.all())]
    )

    class Meta:
        model = Sigorta
        fields = (
            "id",
            "firma_adi",
            "adres",
            "telefon",
            "email",
            "sigortaavukati",
        )


class AraciSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=Araci.objects.all())]
    )

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
    user = UserDetailsSerializer()
    arac = AracSerializer()
    araci = AraciSerializer()
    # sigorta = SigortaSerializer()
    anlasma_modeli = AnlasmaModeliSerializer()
    expert = ExpertSerializer()

    class Meta:
        model = KazaKaydi
        fields = (
            "id",
            "user",
            "arac",
            "araci",
            "profil",
            "kaza_tarihi",
            # "sigorta",
            "anlasma_modeli",
            "asama",
            "asama_tarihi",
            "expert",
            "tahmini_deger_kaybi",
            "gerceklesen_deger_kaybi",
        )

    def get_fields(self):
        fields = super().get_fields()
        if not self.context["request"].user.is_staff:
            fields.pop("profil")
            fields.pop("anlasma_modeli")
            fields.pop("expert")
        return fields
