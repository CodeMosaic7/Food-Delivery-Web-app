
from django.urls import path

from .views import UserDetails


urlpatterns = [
    path('api/login/',UserDetails,name="UserDetails"),
]