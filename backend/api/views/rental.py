from django.shortcuts import render
from rest_framework import generics
from ..serializers.pole import GetRentalSerializer, CreateRentalSerializer
from ..models.poles import Rental, Pole
from django.views import View
from django.http import HttpResponse


class CreateRentalView(generics.CreateAPIView):
    serializer_class = CreateRentalSerializer
    permission_classes = []

    def perform_create(self, serializer):
        pole = self.request.POST.get("pole")
        Pole.objects.filter(id=pole).update(isRented=True)
        return super().perform_create(serializer)
    

class GetRentalListView(generics.ListAPIView):
    serializer_class = GetRentalSerializer
    permission_classes = []

    def get_queryset(self):
        return Rental.objects.all()
    
class GetRentalView(generics.RetrieveAPIView):
    serializer_class = GetRentalSerializer
    permission_classes = []

    def get_queryset(self):
        return Rental.objects.all()
    

