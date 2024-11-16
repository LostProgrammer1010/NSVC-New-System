from django.urls import path
from .views.poles import CreatePoleView, GetPoleView, GetQRCodeImageView, GetPoleListView


urlpatterns = [
    path("pole/", GetPoleListView.as_view(), name="All Poles"),
    path("pole/add", CreatePoleView.as_view(), name="Add Pole"),
    path("pole/<pk>", GetPoleView.as_view(), name="Get Pole by ID"),
    path("pole/qr/<int:id>" , GetQRCodeImageView.as_view(), name="Get Pole image"),
]

