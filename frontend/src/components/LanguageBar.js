import { useStyles } from './Styles.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import { TextField, Box, Grid, Autocomplete, IconButton} from '@mui/material'
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';


const languages = [
    'Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Armenian', 'Azerbaijani', 'Basque', 'Belarusian', 
    'Bengali', 'Bosnian', 'Bulgarian', 'Catalan', 'Cebuano', 'Chichewa', 'Chinese (simplified)', 
    'Chinese (traditional)', 'Corsican', 'Croatian', 'Czech', 'Danish', 'Dutch', 'English', 'Esperanto', 
    'Estonian', 'Filipino', 'Finnish', 'French', 'Frisian', 'Galician', 'Georgian', 'German', 'Greek', 
    'Gujarati', 'Haitian creole', 'Hausa', 'Hawaiian', 'Hebrew', 'Hindi', 'Hmong', 'Hungarian', 'Icelandic', 
    'Igbo', 'Indonesian', 'Irish', 'Italian', 'Japanese', 'Javanese', 'Kannada', 'Kazakh', 'Khmer', 'Korean', 
    'Kurdish (kurmanji)', 'Kyrgyz', 'Lao', 'Latin', 'Latvian', 'Lithuanian', 'Luxembourgish', 'Macedonian', 
    'Malagasy', 'Malay', 'Malayalam', 'Maltese', 'Maori', 'Marathi', 'Mongolian', 'Myanmar (burmese)', 
    'Nepali', 'Norwegian', 'Odia', 'Pashto', 'Persian', 'Polish', 'Portuguese', 'Punjabi', 'Romanian', 
    'Russian', 'Samoan', 'Scots gaelic', 'Serbian', 'Sesotho', 'Shona', 'Sindhi', 'Sinhala', 'Slovak', 
    'Slovenian', 'Somali', 'Spanish', 'Sundanese', 'Swahili', 'Swedish', 'Tajik', 'Tamil', 'Telugu', 'Thai', 
    'Turkish', 'Ukrainian', 'Urdu', 'Uyghur', 'Uzbek', 'Vietnamese', 'Welsh', 'Xhosa', 'Yiddish', 'Yoruba', 'Zulu'
  ];
  
  
function SwapLanguage(props) {

    const classes = useStyles();

    const handleSwap = () => {
        props.setSrc(props.dest);
        props.setDest(props.src);
        props.setSrcText(props.destText);
        props.setDestText(props.srcText);
    }

    return(
        <IconButton onClick={handleSwap}>
            <SwapHorizontalCircleRoundedIcon 
                fontSize='large' 
                className={classes.swap}
            />
        </IconButton>
    );
}

  
function LanguageBar(props) {
    const verySmallScreen = useMediaQuery('(max-width:649px)');
    const smallScreen = useMediaQuery('(min-width:650px) and (max-width:899px)');
    const mediumScreen = useMediaQuery('(min-width:900px) and (max-width:1200px)');

    const {src, dest, setSrc, setDest, srcText, destText, setSrcText, setDestText} = props;


    const classes = useStyles();

    return (
    <Box className={classes.langBar}>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <Grid item>
            <Autocomplete
            fullWidth
            id="combo-box-detect"
            options={languages}
            value={src}
            onChange={(_, newValue) => {
                setSrc(newValue);
            }}
            sx={{ 
                width: 
                verySmallScreen ? '10ch' : 
                smallScreen ? '20ch' : 
                mediumScreen ? '30ch' : '40ch', 
                m: 1
            }}
            renderInput={(params) => <TextField {...params} />}
            />
        </Grid>
        <Grid item>
            <SwapLanguage 
            src={src} 
            dest={dest} 
            setSrc={setSrc} 
            setDest={setDest} 
            srcText={srcText}
            destText={destText}
            setSrcText={setSrcText} 
            setDestText={setDestText}  
            />
        </Grid>
        <Grid item>
            <Autocomplete
            disablePortal
            id="combo-box-translate"
            options={languages}
            value={dest}
            onChange={(_, newValue) => {
                setDest(newValue);
            }}
            sx={{ 
                width: verySmallScreen ? '10ch' : 
                smallScreen ? '20ch' : 
                mediumScreen ? '30ch' : '40ch', 
                m: 1 
            }}
            renderInput={(params) => <TextField {...params} />}
            />
        </Grid>
        </Grid>
    </Box>
    );
}

export default LanguageBar;