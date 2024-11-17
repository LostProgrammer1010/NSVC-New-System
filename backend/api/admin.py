from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models.poles import Pole, Rental
from .models.user import UserInformation


class AdminUserInformation(admin.ModelAdmin):
    list_display = ('user', "phone_number")

class AdminRental(admin.ModelAdmin):
    list_display = ("pole", 'renter', "cost", 'isPaid')

class AdminPole(admin.ModelAdmin):
    list_display = ("brand_name", "feet", "inches", "material", "replacement_cost", "rental_cost", "isRented")

class UserInformationInline(admin.StackedInline):
    model = UserInformation
    can_delete = False
    verbose_name_plural = "Info"

# Register your models here.
admin.site.register(Pole, AdminPole)
admin.site.register(UserInformation, AdminUserInformation)
admin.site.register(Rental, AdminRental)




# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = [UserInformationInline]




# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)