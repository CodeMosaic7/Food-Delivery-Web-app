from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework.generics import ListAPIView
from .models import User
from django.http import HttpResponse
# Create your views here.
def main(request):
    return HttpResponse("<h1>Hello</h1>")