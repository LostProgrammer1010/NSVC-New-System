from django.contrib.auth.models import User
from ..models.user import UserInformation
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class UserInfoSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)

    class Meta:
        model = UserInformation
        fields = '__all__'

        def create(self, validated_data):
            user_data = validated_data.pop('user')
            user = UserSerializer.create(UserSerializer(), validated_data=user_data)
            info, _ = UserInformation.objects.update_or_create(user=user)
            return info
