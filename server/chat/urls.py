from django.urls import path
from . import views

app_name = 'chat'

urlpatterns = [
    path('', views.room_list_view, name='list'),
    path('<id>/', views.room_detail_view, name='detail'),
]
