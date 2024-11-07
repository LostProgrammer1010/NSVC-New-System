from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Pole, Note, Employee

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        emp = Employee.objects.create(user=user, department="")
        return user

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id", "title", "content", "create_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}
        

class PoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pole
        fields = ["id", "title"]

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ["id", "department"]