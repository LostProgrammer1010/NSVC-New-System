from django.db import models
from django.contrib.auth.models import User


class UserInformation(models.Model):
    # Each pole should only be rented once but a user can rent multiple poles
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    contact = models.CharField(max_length=10)
    under_age = models.BooleanField(default=0)
    parent_name = models.CharField(max_length=30, default="")
    parent_phone = models.CharField(max_length=30, default="")
    #pole_rental_agreement = models.ImageField(upload_to=)
    #vaulter_agreement = models.ImageField(upload_to=)

    
    
