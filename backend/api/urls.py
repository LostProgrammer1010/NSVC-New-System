from django.urls import path
from .views.poles import CreatePoleView, GetPoleView, GetQRCodeImageView, GetPoleListView, DeletePoleView
from .views.rental import CreateRentalView, GetRentalListView, GetRentalView


urlpatterns = [
    # Pole paths
    path("poles/", GetPoleListView.as_view(), name="All Poles"),
    path("pole/add", CreatePoleView.as_view(), name="Add Pole"),
    path("pole/<pk>", GetPoleView.as_view(), name="Retrive Pole"),
    path("pole/qr/<int:id>" , GetQRCodeImageView.as_view(), name="Get Pole QR"),


    path("rentals/", GetRentalListView.as_view(), name="All Rentals"),
    path("rental/add", CreateRentalView.as_view(), name="Add Rental"),
    path("rental/<pk>", GetRentalView.as_view(), name="Retrive Rental"),
    path("pole/<int:id>/delete", DeletePoleView.as_view(), name="Delete Pole"),


]

# To be added 

# Pole Paths

# path("pole/<pk>/update, UpdatePoleView.as_view(), name="Update Pole"),

# Rental Paths
"""

path("rental/<user>, GetUserRentalsListView.as_view(), name="Get All Poles Rented by User"),
path("rental/<pk>/update, UpdateRentalView.as_view(), name="Update Rental"),
path("rental<pk>/delete", DeleteRentalView.as_view(), name="Delete Rental")
"""

