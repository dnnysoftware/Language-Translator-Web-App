import { useState, useEffect } from 'react'
import LanguageBar from './LanguageBar.js';
import { TextField, Box, Grid, InputAdornment, IconButton} from '@mui/material'
import { useStyles } from './Styles.js';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MicIcon from '@mui/icons-material/Mic';
import axios from 'axios';


function DetectBox(props) {
    const { src, dest, srcText, setSrcText, setDestText } = props;
    const classes = useStyles();
  
    const fetchTranslated = async (src, dest, srcText) => {
      try {
        if(srcText != null && srcText !== '') {
            const url = `/api/translate?src=${src}&dest=${dest}&srcText=${srcText}`;
            const response = await axios.get(url);
            setDestText(response.data['translation']);
        } else {
            setDestText('');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const handleVolumeUpClick = async () => {
        try {
            if(srcText != null && srcText !== '') {
                const url = `/api/dac/?language=${src}&text=${srcText}`;
                const response = await axios.get(url);
                console.log(response.data['response'])
            }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
    };

    const handleMicrophoneUpClick = async () => {
        try {
            const url = `/api/adc/`;
            const response = await axios.get(url);
            setSrcText(srcText + '' + response.data['text'])
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleChange = (e) => {
        setSrcText(e.target.value);
    };

    useEffect(() => {
        fetchTranslated(src, dest, srcText);
    });
  
    return (
      <Box component="form">
        <TextField
          id="outlined-multiline-static"
          placeholder="Type Here"
          multiline
          fullWidth
          rows={9}
          value={srcText}
          InputProps={{
            endAdornment: (
              <InputAdornment className={classes.iconPosition} position="end">
                <IconButton onClick={handleMicrophoneUpClick}>
                  <MicIcon className={classes.iconStyle} />
                </IconButton>
                <IconButton onClick={handleVolumeUpClick}>
                  <VolumeUpIcon className={classes.iconStyle} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={handleChange}
        />
      </Box>
    );
}


function TranslatedBox(props) {

    const { dest, destText } = props;

    const classes = useStyles();


    const handleVolumeUpClick = async () => {
        try {
            if(destText != null && destText !== '') {
                const url = `/api/dac/?language=${dest}&text=${destText}`;
                const response = await axios.get(url);
                console.log(response.data['response'])
            }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
    };

    return (
        <Box component="form">
            <TextField
            id="outlined-multiline-static"
            placeholder='Translation'
            multiline
            disabled
            fullWidth
            sx={{
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#000000",
              },
            }}
            rows={9}
            value={destText}
            InputProps={{
                endAdornment: <InputAdornment className={classes.iconPosition} position='end'>
                    <IconButton onClick={handleVolumeUpClick}>
                        <VolumeUpIcon className={classes.iconStyle}/>
                    </IconButton>
                </InputAdornment>
            }}
            />    
        </Box>
    );
}


function Translator() {

    const [src, setSrc] = useState('English');
    const [dest, setDest] = useState('French');
    const [srcText, setSrcText] = useState('');
    const [destText, setDestText] = useState('');


    return (
        <Grid container alignItems='center' justifyContent='center' minHeight='80vh'>
            <Grid container rowSpacing={1} columnSpacing={1} maxWidth='70vw'>
                <Grid item xs={12}>
                    <LanguageBar 
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
                <Grid item xs={6}>
                    <DetectBox 
                        src={src} 
                        dest={dest} 
                        srcText={srcText} 
                        setSrcText={setSrcText}
                        setDestText={setDestText}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TranslatedBox 
                        dest={dest} 
                        destText={destText}
                    />
                </Grid>     
            </Grid>    
        </Grid>  
    );
}


export default Translator;