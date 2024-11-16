# Create your views here.
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from ..models.user import UserInformation
from ..serializers.user import UserSerializer, UserInfoSerializer
from rest_framework.permissions import AllowAny, IsAdminUser
from django.http import HttpResponse

class CreateUserView(generics.CreateAPIView):
    queryset = UserInformation.objects.all
    serializer_class = UserInfoSerializer
    permission_classes = [AllowAny]


    def perform_create(self, serializer):
        req_dict = self.request.POST
        username = req_dict.get("user.username")
        password = req_dict.get("user.password")
        email = req_dict.get("user.email")
        user = User.objects.create_user(username=username, password=password, email=email)
        return UserInformation(user=user)



class GetUserListView(generics.ListAPIView):
    serializer_class = UserInfoSerializer
    permission_classes = []

    def get_queryset(self):
        return UserInformation.objects.all()
    
# Cannot look up a superuser with this API
class GetUserView(generics.RetrieveAPIView):
    serializer_class = UserInfoSerializer
    permission_classes = []

    def get_queryset(self):
        return UserInformation.objects.all()
    