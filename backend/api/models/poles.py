from django.db import models
from django.contrib.auth.models import User
import qrcode
from random import randint

MAX_LENGTH = 6

# Generates a random number that is 6 digits long
def generate_serial():
    digits = "0123456789"
    serial = ""
    for _ in range(MAX_LENGTH):
        serial += digits[randint(0,9)]
    return serial

class Pole(models.Model):
    serial = generate_serial()
    id = models.CharField(max_length=6, default=serial ,primary_key=True)
    brand_name = models.CharField(max_length=25)
    length = models.DecimalField(max_digits=5, decimal_places=2)
    material = models.CharField(max_length=1, choices={'C' : "Carbon",'F' : "Fiberglass"})
    replacement_cost = models.DecimalField(max_digits=5, decimal_places=2)
    rental_cost = models.DecimalField(max_digits=5, decimal_places=2)
    renter = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True) # not require since a pole may not be rented at a given time
    qr_code = models.CharField(max_length=100, default="", blank=True, null=False) # This gives the link to the url for qr_code


    def save(self, *args, **kwargs):
        # Checks to make sure that id is not already used
        # Prevents a error and will still add pole to inventory
        while(Pole.objects.filter(id=self.id)):
            self.id = generate_serial()
        
        self.qr_code = f"/qr_codes/{self.serial}.png"
        # Will eventually need to be updated to actual url for website
        qr = qrcode.make(f"http://127.0.0.1:8000/api/pole/{self.serial}") # link to the pole information with that serial number
        type(qr)
        qr.save(f"qr_codes/{self.serial}.png")
        super().save(*args, **kwargs)


class Rental(models.Model):
    # Each pole should only be rented once but a user can rent multiple poles
    pole = models.OneToOneField(Pole, on_delete=models.CASCADE, primary_key=True)
    renter = models.OneToOneField(User, on_delete=models.CASCADE)
    return_date = models.DateField(auto_now_add=True)
    late_fee = models.DecimalField(max_digits=5,decimal_places=2)
