from django.shortcuts import render
from django.urls import reverse_lazy
from django.http import HttpResponse
from django.views.generic import (View,TemplateView,
                                ListView,DetailView,
                                CreateView,DeleteView,
                                UpdateView)
from . import models


# Create your views here.


class RoomListView(ListView):
    context_object_name = 'rooms'
    model = models.Room
    # template_name = 'chat/index.html'
    

class RoomCreateView(CreateView):
    fields = ("name","description")
    model = models.Room


class RoomDeleteView(DeleteView):
    model = models.Room
    success_url = reverse_lazy("chat:list")

    
