from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_routes, name='routes'),
    path('translate/', views.get_text_to_translate, name='translate'),
    path('dac/', views.get_audio, name='dac'),
    path('adc/', views.get_text_from_audio, name='adc'),
]