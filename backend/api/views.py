from django.shortcuts import render
from django.http import HttpResponse # Added to derive responses from requests
from django.http import JsonResponse
from .language import Language
from .dac_conversion import DAC
from .adc_conversion import ADC

# Create your views here.

def get_routes(requests):
    return JsonResponse('Translator API', safe=False)

""" API GET request to get translated text
"""
def get_text_to_translate(request):
    src_lang = request.GET.get('src')
    dest_lang = request.GET.get('dest')
    text = request.GET.get('srcText')

    translation = Language(src_lang, dest_lang) 

    translated_text = translation.translate(text)

    return JsonResponse({'translation': translated_text})

""" API GET request that converts digital text to audio sound
"""
def get_audio(request):
    text = request.GET.get('text')
    language = request.GET.get('language')
    print(text, language)
    translation = Language(language, language) 
    lang_code = translation.get_lang_code_src()

    dac = DAC(lang_code, text)
    res = dac.speak_language()

    return JsonResponse({'response_code': res})

""" API GET request that takes in audio and converts it to text
"""
def get_text_from_audio(request):  
    adc = ADC()
    text = adc.audio_to_digital()
    return JsonResponse({'text': text})
