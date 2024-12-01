from django.db import models
from django.contrib.auth.models import User
import qrcode
from random import randint
from PIL import Image, ImageDraw, ImageFont
import qrcode.constants

MAX_LENGTH = 6

# Generates a random number that is 6 digits long
def generate_serial():
    digits = "0123456789"
    serial = ""
    for _ in range(MAX_LENGTH):
        serial += digits[randint(0,9)]
    return serial


# Add information about pole to qr_code
def add_text_qr_code(path, pole_feet, pole_inches, pole_fex):
    image = Image.open(path)
    draw = ImageDraw.Draw(image)
    text = f"Next Step Vault Club\nLength: {pole_feet}'{pole_inches}\nFlex: {pole_fex}"
    postion = (20,315)
    font = ImageFont.truetype("./Fonts/Roboto-Black.ttf", size=20)
    draw.text(postion, text, fill="black",font=font)
    image.save(path)

def generate_qr_code(pole):
    data = f"http://localhost:3000/api/pole/{pole.serial}"
    # Will eventually need to be updated to actual url for website
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)
    qr_image = qr.make_image(fill_color="black", back_color="white")
    qr_width, qr_height = qr_image.size

    # Decrease width and increase the height
    new_image = Image.new("RGB", (qr_width-50, qr_height+25), "white") 

    # Positions qr code with more space on bottom for text
    new_image.paste(qr_image, (-25,-25)) 
    new_image.save(f"../backend/qr_codes/{pole.serial}.png")

    add_text_qr_code(f"../backend/qr_codes/{pole.serial}.png", pole.feet, pole.inches, pole.flex) # Will need to add flex to pole model


class Pole(models.Model):
    serial = generate_serial()
    id = models.CharField(max_length=6, default=serial ,primary_key=True)
    brand_name = models.CharField(max_length=25)
    feet = models.PositiveSmallIntegerField(default=0)
    inches = models.PositiveSmallIntegerField(default=0)
    flex = models.DecimalField(max_digits=4, default=0, decimal_places=2)
    material = models.CharField(max_length=1, choices={'C' : "Carbon",'F' : "Fiberglass"})
    replacement_cost = models.DecimalField(max_digits=7, decimal_places=2)
    rental_cost = models.DecimalField(max_digits=5, decimal_places=2)
    qr_code = models.CharField(max_length=100, default="", blank=True, null=False) # This gives the link to the url for qr_code
    isRented = models.BooleanField(default=False)


    def save(self, *args, **kwargs):
        # Checks to make sure that id is not already used to prevent error
        while(Pole.objects.filter(id=self.id)):
            self.id = generate_serial()

        self.qr_code = f"/qr_codes/{self.serial}.png"
        generate_qr_code(self)
        super().save(*args, **kwargs)


class Rental(models.Model):
    # Each pole should only be rented once but a user can rent multiple poles
    pole = models.OneToOneField(Pole, on_delete=models.CASCADE, primary_key=True)
    renter = models.ForeignKey(User, on_delete=models.CASCADE)
    return_date = models.DateField()
    cost = models.DecimalField(max_digits=6, decimal_places=2, default=0.00)
    late_fee = models.DecimalField(max_digits=8,decimal_places=2, default=0.00)
    isPaid = models.BooleanField(default=False)

