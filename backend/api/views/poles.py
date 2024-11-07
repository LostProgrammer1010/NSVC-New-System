from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from ..serializers import PoleSerializer


class CreatePoleView(generics.CreateAPIView):
    serializer_class = PoleSerializer
    permission_classes = []