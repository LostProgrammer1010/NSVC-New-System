from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models.poles import Pole
from .models.user import UserInformation

# Register your models here.
admin.site.register(Pole)
admin.site.register(UserInformation)


class UserInformationInline(admin.StackedInline):
    model = UserInformation
    can_delete = False
    verbose_name_plural = "Info"

# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = [UserInformationInline]


# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)