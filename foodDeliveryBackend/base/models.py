from django.db import models

# Create your models here.
class User(models.Model):
    username=models.CharField(max_length=100,unique=True)
    # max_lenght is a required field
    password=models.CharField(max_length=100)

class Register(models.Model):
    name=models.CharField(max_length=20, unique=True)
    email=models.CharField(max_length=20, unique=True)
    username=models.CharField(max_length=100,unique=True)
    password=models.CharField(max_length=100)


