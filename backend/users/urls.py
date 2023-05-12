from django.urls import path, include
from .views import RegisterAPI, ProfileView
from rest_framework import routers

router = routers.DefaultRouter()
router.register("profile", ProfileView)

urlpatterns = [
    path('auth/', include('dj_rest_auth.urls')),
    path("register/", RegisterAPI.as_view())
]

urlpatterns += router.urls
