from django.contrib.auth.models import User
from ..models.user import UserInformation
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username","first_name", "last_name", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class UserInfoSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    class Meta:
        model = UserInformation
        fields = ["user", "phone_number", "under_18", "parent_name", "parent_phone", "parent_email"]

        def create(self, validated_data):
            user_data = validated_data.pop('user')
            user = UserSerializer.create(UserSerializer(), validated_data=user_data)
            info, _ = UserInformation.objects.update_or_create(user=user)
            return info
