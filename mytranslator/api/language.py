from googletrans import Translator, LANGCODES

class Language():

    def __init__(self, lang_src_name, lang_dest_name):
        self.lang_src_name = lang_src_name
        self.lang_dest_name = lang_dest_name
        self.lang_code_src = LANGCODES.get(lang_src_name.lower())
        self.lang_code_dest = LANGCODES.get(lang_dest_name.lower())
    
    def translate(self, phrase):
        try:
            return Translator().translate(
                phrase, 
                dest=self.lang_code_dest, 
                src=self.lang_code_src).text
        except AttributeError:
            print("Error: could not translate that phrase into the desired language")
            return None
