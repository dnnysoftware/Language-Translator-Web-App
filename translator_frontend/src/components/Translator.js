import React, { useState } from 'react'
import { TextField, Box, Grid, Autocomplete, InputAdornment, IconButton} from '@mui/material'
import { useStyles } from './Styles.js';
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MicIcon from '@mui/icons-material/Mic';
import useMediaQuery from '@mui/material/useMediaQuery';


const languages = [
    { label: 'English'},
    { label: 'French'},
    { label: 'German'},
    { label: 'Japanese'}
];


function SwapLanguage(props) {

    const classes = useStyles();

    const handleSwap = () => {
        props.setBaseLang(props.convertedLang);
        props.setConvertedLang(props.baseLang);
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


function LanguageBar() {
    const verySmallScreen = useMediaQuery('(max-width:649px)');
    const smallScreen = useMediaQuery('(min-width:650px) and (max-width:899px)');
    const mediumScreen = useMediaQuery('(min-width:900px) and (max-width:1200px)');
    const [baseLang, setBaseLang] = useState(languages[0]);
    const [convertedLang, setConvertedLang] = useState(languages[1]);
  
    const classes = useStyles();

    return (
      <Box className={classes.langBar}>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Autocomplete
              fullWidth
              id="combo-box-detect"
              options={languages}
              value={baseLang}
              onChange={(_, newValue) => {
                setBaseLang(newValue);
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
              baseLang={baseLang} 
              setBaseLang={setBaseLang} 
              convertedLang={convertedLang} 
              setConvertedLang={setConvertedLang} 
            />
          </Grid>
          <Grid item>
            <Autocomplete
              disablePortal
              id="combo-box-translate"
              options={languages}
              value={convertedLang}
              onChange={(_, newValue) => {
                setConvertedLang(newValue);
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
  

function DetectBox() {

    const classes = useStyles();

    return (
        <Box component="form" >
            <TextField
            id="outlined-multiline-static"
            placeholder='Type Here'
            multiline
            fullWidth
            rows={9}
            InputProps={{
                endAdornment: <InputAdornment className={classes.iconPosition} position='end'>
                    <IconButton >
                        <MicIcon className={classes.iconStyle}/>
                    </IconButton>
                    <IconButton >
                        <VolumeUpIcon className={classes.iconStyle}/>
                    </IconButton>
                </InputAdornment>,
            }}
            onKeyPress= {(e) => {
                if (e.key) {
                    console.log(e.target.value);
                    
                }
            }}
            /> 
        </Box>      
    );
}


function TranslatedBox() {

    const classes = useStyles();

    return (
        <Box component="form">
            <TextField
            id="outlined-multiline-static"
            placeholder='Translation'
            multiline
            disabled
            fullWidth
            rows={9}
            InputProps={{
                endAdornment: <InputAdornment className={classes.iconPosition} position='end'>
                    <IconButton >
                        <VolumeUpIcon className={classes.iconStyle}/>
                    </IconButton>
                </InputAdornment>,
            }}
            />    
        </Box>
    );
}


class Translator extends React.Component {
    render() {
        return (
            <Grid container alignItems='center' justifyContent='center' minHeight='80vh'>
                <Grid container rowSpacing={1} columnSpacing={1} maxWidth='70vw'>
                    <Grid item xs={12}>
                        <LanguageBar />
                    </Grid>
                    <Grid item xs={6}>
                        <DetectBox />
                    </Grid>
                    <Grid item xs={6}>
                        <TranslatedBox />
                    </Grid>     
                </Grid>    
            </Grid>  
        );
    }
}


export default Translator