from django.contrib import admin

from chat.models import Room


class RoomAdmin(admin.ModelAdmin):
    list_display = ("id", "name", )
    search_fields = ("name", "description")


admin.site.register(Room, RoomAdmin)