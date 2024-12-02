from django.contrib.auth.models import User
from rest_framework import serializers
from ..serializers.user import UserSerializer
from ..models.poles import Pole , Rental


        

class PoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pole
        fields = '__all__'

        

class GetRentalSerializer(serializers.ModelSerializer):
    
    renter = UserSerializer(required=True)
    pole = PoleSerializer(required=True)

    class Meta:
        model = Rental
        fields = '__all__'


class CreateRentalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rental
        fields = '__all__'