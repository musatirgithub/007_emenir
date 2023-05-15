from rest_framework import serializers
from .models import KazaKaydi


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
