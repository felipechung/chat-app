from django.shortcuts import render
from django.urls import reverse_lazy
from django.http import HttpResponse,JsonResponse
from django.views.generic import (View,TemplateView,
                                ListView,DetailView,
                                CreateView,DeleteView,
                                UpdateView)
from .models import Room
from . import models


# Create your views here.


def room_list_view(request):
    rooms = Room.objects.all().values('id', 'name', 'description')  # or simply .values() to get all fields
    room_list = list(rooms)  # important: convert the QuerySet to a list object
    return JsonResponse(room_list, safe=False)
    # https://simpleisbetterthancomplex.com/tutorial/2016/07/27/how-to-return-json-encoded-response.html


# class RoomListView(ListView):
#     context_object_name = 'rooms'
#     model = models.Room
    # template_name = 'chat/index.html'
    

class RoomCreateView(CreateView):
    fields = ("name","description")
    model = models.Room


class RoomDeleteView(DeleteView):
    model = models.Room
    success_url = reverse_lazy("chat:list")

    
