from django.db import models
from django.contrib.auth.models import User
import qrcode
from random import randint

MAX_LENGTH = 6

def generate_serial():
    digits = "0123456789"
    serial = ""
    for _ in range(MAX_LENGTH):
        serial += digits[randint(0,9)]
    return serial
        

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")
    def __str__(self):
        return self.title
    
class Pole(models.Model):
    serial = generate_serial()
    id = models.CharField(max_length=6, default=serial, primary_key=True)
    brand_name = models.CharField(max_length=25, default="Generic")
    length = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    material = models.CharField(max_length=1, choices={'C' : "Carbon",'F' : "Fiberglass"}, default="C")
    replacement_cost = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    rental_cost = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    renter = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    qr_code = models.CharField(max_length=100, default="", blank=True, null=False)


    def save(self, *args, **kwargs):
        print(self.serial)

        self.qr_code = f"/qr_codes/{self.serial}.png"
        qr = qrcode.make(f"http://127.0.0.1:8000/api/pole/{self.serial}")
        type(qr)
        qr.save(f"qr_codes/{self.serial}.png")
        
        super().save(*args, **kwargs)

class Rental(models.Model):
    # Each pole should only be rented once but a user can rent multiple poles
    pole = models.ForeignKey(Pole, on_delete=models.CASCADE, primary_key=True)
    renter = models.ForeignKey(User, on_delete=models.CASCADE)
    return_date = models.DateField(auto_now_add=True)
    late_fee = models.DecimalField(max_digits=5,decimal_places=2)

class Coach(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    
    