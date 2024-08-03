from django.urls import path 
from base import views

urlpatterns=[
    path('user/',views.UserList.as_view())
]