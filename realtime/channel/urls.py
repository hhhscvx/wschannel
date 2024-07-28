from django.urls import path
from . import views

urlpatterns = [
    path('channel/', views.chat_view)
]
