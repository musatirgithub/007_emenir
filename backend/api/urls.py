from django.urls import path, include
from .views import ExpertView, SigortaView, AraciView, AracView, AnlasmaModeliView, KazaKaydiView, SigortaAvukatiView
from rest_framework import routers

router = routers.DefaultRouter()
router.register("expert", ExpertView)
router.register("insurancelawyer", SigortaAvukatiView)
router.register("insurance", SigortaView)
router.register("mediator", AraciView)
router.register("vehicle", AracView)
router.register("agreement", AnlasmaModeliView)
router.register("record", KazaKaydiView)


urlpatterns = [
]

urlpatterns += router.urls
