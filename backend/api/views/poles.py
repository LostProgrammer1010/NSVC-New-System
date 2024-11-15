from django.shortcuts import render
from rest_framework import generics
from ..serializers.pole import PoleSerializer
from ..models.poles import Pole
from django.views import View
from django.http import HttpResponse



class CreatePoleView(generics.CreateAPIView):
    serializer_class = PoleSerializer
    permission_classes = []

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)



class PoleListImage(generics.RetrieveAPIView):
    serializer_class = PoleSerializer
    permission_classes = []

    def get_queryset(self):
        return Pole.objects.all()
    

    
class GetImage(View):
    def get(self, request, *args, **kwargs):
        id = self.kwargs["id"]
        pole = Pole.objects.filter(id=id)[0]
        return HttpResponse(f"<img src='{pole.qr_code}'/>")

    

    

