from pocketsphinx import LiveSpeech

class ADC:

  def __init__(self):
    pass

  def audio_to_digital(self):
    speech = LiveSpeech() 
    src_text = ''
    for phrase in speech:
        try:
          src_text = str(phrase)
        except:
          print('Could not translate')
        finally:
          return src_text


