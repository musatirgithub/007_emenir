from django.urls import path, include
from .views import KazaKaydiView
from rest_framework import routers

router = routers.DefaultRouter()
router.register("record", KazaKaydiView)


urlpatterns = [
]

urlpatterns += router.urls
