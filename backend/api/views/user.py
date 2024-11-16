# Create your views here.
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from ..models.user import UserInformation
from ..serializers.user import UserSerializer, UserInfoSerializer
from rest_framework.permissions import AllowAny, IsAdminUser

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all
    serializer_class = UserSerializer
    permission_classes = [AllowAny]



class GetUserListView(generics.ListAPIView):
    serializer_class = UserInfoSerializer
    permission_classes = []

    def get_queryset(self):
        return User.objects.all()
    
# Cannot look up a superuser with this API
class GetUserView(generics.RetrieveAPIView):
    serializer_class = UserInfoSerializer
    permission_classes = []

    def get_queryset(self):
        return UserInformation.objects.all()
    