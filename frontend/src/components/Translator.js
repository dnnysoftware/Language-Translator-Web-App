import React, { useState, useEffect } from 'react'
import { TextField, Box, Grid, Autocomplete, InputAdornment, IconButton} from '@mui/material'
import { useStyles } from './Styles.js';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MicIcon from '@mui/icons-material/Mic';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';


const languages = [
    'English',
    'French',
    'German',
    'Japanese'
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