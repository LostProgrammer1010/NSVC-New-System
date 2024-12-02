from django.shortcuts import render
from rest_framework import generics, status
from ..serializers.pole import PoleSerializer
from ..models.poles import Pole
from django.views import View
from django.http import HttpResponse
import os
from rest_framework.response import Response


# View for adding a pole to database
class CreatePoleView(generics.CreateAPIView):
    serializer_class = PoleSerializer
    permission_classes = []
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)


# View to get a single pole by id
class GetPoleView(generics.RetrieveAPIView):
    serializer_class = PoleSerializer
    permission_classes = []

    def get_queryset(self):
        return Pole.objects.all()
    
class GetPoleListView(generics.ListAPIView):
    serializer_class = PoleSerializer
    permission_classes = []

    def get_queryset(self):
        return Pole.objects.all()

# Delete a pole by ID and remove the QR code assciated with it
class DeletePoleView(generics.DestroyAPIView):
    serializer_class = PoleSerializer
    permission_classes = []
    queryset = Pole.objects.all()
    lookup_field = 'id'

    def perform_destroy(self, instance):
        serialized_data = PoleSerializer(instance).data
        if os.path.exists(f"../backend/qr_codes/{instance.id}.png"):
            os.remove(f"../backend/qr_codes/{instance.id}.png")
        instance.delete()
        return serialized_data
    
    # Returns the details about the stick that was deleted
    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        deleted_data = self.perform_destroy(instance)
        return Response(deleted_data, status=status.HTTP_200_OK)

    
# Get the QRCode for a certain pole
class GetQRCodeImageView(View):
    def get(self, request, *args, **kwargs):
        id = self.kwargs["id"]
        pole = Pole.objects.filter(id=id)[0]
        return HttpResponse(f"<img src='{pole.qr_code}'/>")
    


    

    

