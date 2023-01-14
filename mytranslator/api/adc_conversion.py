# Import the pocketsphinx and googletrans libraries
import pocketsphinx
import language

class ADC:

  def __init__(self, languages):
    self.languages = languages

  def audio_to_digital(self):
    speech = pocketsphinx.LiveSpeech() # Listen for speech from the microphone and translate it
    for phrase in speech:
        try:
          print("Recognized text: ", phrase)
          translation = self.languages.translate(phrase)
          print("Translation text: ", translation)
        except:
          continue


def main():
  lang = language.Language('English', 'Japanese')
  adc = ADC(lang)
  adc.audio_to_digital()

if __name__ == "__main__":
    main()