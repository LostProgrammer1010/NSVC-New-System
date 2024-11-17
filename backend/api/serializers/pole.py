from django.contrib.auth.models import User
from rest_framework import serializers
from ..serializers.user import UserSerializer
from ..models.poles import Pole , Rental


        

class PoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pole
        fields = ["brand_name", "feet", "inches", "material", "replacement_cost", "rental_cost", "isRented"]

        

class GetRentalSerializer(serializers.ModelSerializer):
    
    renter = UserSerializer(required=True)
    pole = PoleSerializer(required=True)

    class Meta:
        model = Rental
        fields = ["pole", "renter", "return_date", "cost", "late_fee", "isPaid"]


class CreateRentalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rental
        fields = ["pole", "renter", "return_date", "cost", "late_fee", "isPaid"]