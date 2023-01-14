from django.shortcuts import render
from django.http import JsonResponse # Added to derive responses from requests

# Create your views here.

def get_routes(requests):
    return JsonResponse('Our API', safe=False)