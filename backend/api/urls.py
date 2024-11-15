from django.urls import path
from .views.poles import CreatePoleView, PoleListImage, GetImage


urlpatterns = [
    path("pole/", CreatePoleView.as_view(), name="add-pole"),
    path("pole/<pk>", PoleListImage.as_view()),
    path("pole/image/<int:id>" , GetImage.as_view()),
]

