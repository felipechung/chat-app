from django.shortcuts import render
from django.urls import reverse_lazy
from django.http import HttpResponse
from django.views.generic import (View,TemplateView,
                                ListView,DetailView,
                                CreateView,DeleteView,
                                UpdateView)
from . import models


# Create your views here.

class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self,**kwargs):
        context  = super().get_context_data(**kwargs)
        context['injectme'] = "Basic Injection!"
        return context


class RoomListView(ListView):
    model = models.Room


class RoomCreateView(CreateView):
    fields = ("name","description")
    model = models.Room


class RoomDeleteView(DeleteView):
    model = models.Room
    success_url = reverse_lazy("chat:list")

    
