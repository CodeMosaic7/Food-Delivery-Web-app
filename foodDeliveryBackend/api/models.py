from django.db import models

# Create your models here.
class Users(models.Model):
    USER_TYPE_CHOICES = [
        ('customer', 'Customer'),
        ('delivery_person', 'Delivery Person'),
        ('admin', 'Admin'),
    ]
    user_id =models.CharField(max_length=40,unique=True)
    name= models.CharField(max_length=40)
    email= models.EmailField(max_length=254,unique=True)
    password= models.CharField(max_length=40)
    phone_number= models.CharField(max_length=15)
    address= models.TextField(blank=False)
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default='customer')
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name