from django.urls import path
from . import views

app_name = 'chat'

urlpatterns = [
    path('',views.RoomListView.as_view(),name='list'),
    path('create/',views.RoomCreateView.as_view(),name='create'),
    path('delete/<int:pk>/',views.RoomDeleteView.as_view(),name='delete')
]