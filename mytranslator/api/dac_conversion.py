import language
from gtts import gTTS
from io import BytesIO
import tempfile
from playsound import playsound

class DAC:

    def __init__(self, languages, src_text, dest_text):
        self.languages = languages
        self.src_text = src_text
        self.dest_text = dest_text

    def speak_src_language(self):
        tts = gTTS(self.src_text, lang=self.languages.lang_code_src)
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

    def speak_dest_language(self):
        tts = gTTS(self.dest_text, lang=self.languages.lang_code_dest)
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

def main():
  lang = language.Language('English', 'Japanese')
  text = "Hello my name is daniel"
  dac = DAC(lang, text, lang.translate(text))
  dac.speak_src_language()

if __name__ == "__main__":
    main()


# import subprocess

# def text_to_speech(text: str) -> None:
#     # Use the say command to generate audio from the text
#     subprocess.run(["say", text])

# # Test the function with some sample text
# text_to_speech("Hello, my name is John. I am using the say command to generate audio from text.")

