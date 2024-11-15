from django.contrib.auth.models import User
from rest_framework import serializers
from ..models.poles import Pole , Rental
        

class PoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pole
        fields = ["id", "brand_name", "length", "material", "replacement_cost", "rental_cost", "renter", "qr_code"]
        

class RentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rental
        fields = ["id", "pole", "renter", "return_date", "late_fee"]