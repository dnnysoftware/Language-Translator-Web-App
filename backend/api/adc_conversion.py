from pocketsphinx import LiveSpeech

"""_summary_
Audio to digital conversion class that takes in live audio to convert to text
Returns:
    _type_: converted text string
"""
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


