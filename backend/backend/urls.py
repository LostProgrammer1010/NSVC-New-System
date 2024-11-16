from django.contrib import admin
from django.urls import path, include
from api.views.user import CreateUserView, GetUserListView, GetUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/user/register/", CreateUserView.as_view(), name="Register"),
    path("api/users/", GetUserListView.as_view(), name="All Users"),
    path("api/user/<int:pk>", GetUserView.as_view(), name="Get single user"),
    path("api/token/", TokenObtainPairView.as_view(), name="Get Token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="Refresh Token"),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("api.urls")),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)