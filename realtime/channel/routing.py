from django.urls import path
from .consumer import WSConsumer

ws_urlpatterns = [
    path('ws/channel/', WSConsumer.as_asgi())
]
