# Create your views here.
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from ..serializers.user import UserSerializer
from rest_framework.permissions import AllowAny, IsAdminUser

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all
    serializer_class = UserSerializer
    permission_classes = [AllowAny]