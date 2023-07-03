from gtts import gTTS
from io import BytesIO
import tempfile
from playsound import playsound

class DAC:

    def __init__(self, lang_code, text):
        self.lang_code = lang_code
        self.text = text

    def speak_language(self):
        try:
            tts = gTTS(self.text, lang=self.lang_code)
            audio_data = BytesIO()
            tts.write_to_fp(audio_data)

            # Seek to the beginning of the audio data
            audio_data.seek(0)
            
            # Write the audio data to a temporary file
            temp_file = tempfile.NamedTemporaryFile(suffix=".mp3")
            temp_file.write(audio_data.read())
            temp_file.flush()

            # Play the audio file
            playsound(temp_file.name)

            # Close and delete the temporary file
            temp_file.close()
            return 200
        except:
            return 400


