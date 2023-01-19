import React from 'react'
import { TextField, Box, Grid, Autocomplete, InputAdornment, IconButton} from '@mui/material'
import SwapHorizontalCircleRoundedIcon from '@mui/icons-material/SwapHorizontalCircleRounded';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MicIcon from '@mui/icons-material/Mic';
import { grey } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';



const languages = [
    { label: 'English'},
    { label: 'French'}
];


const SwapLanguage = () => {
    return(
        <IconButton>
            <SwapHorizontalCircleRoundedIcon 
                fontSize='large' 
                alignItems='center' 
                sx={{ color: '#fff', 
                border: 2, 
                borderRadius: '50%', 
                borderColor: '#fff', 
                backgroundColor: '#000' }} 
            />
        </IconButton>
    );
}

const LanguageBar = () => {
    const verySmallScreen = useMediaQuery('(max-width:649px)');
    const smallScreen = useMediaQuery('(min-width:650px) and (max-width:899px)');
    const mediumScreen = useMediaQuery('(min-width:900px) and (max-width:1200px)');
    return (
        <Box sx={{ bgcolor: '#ABE3FF', height: '10vh', border: 1, borderRadius: 2 }}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Autocomplete
                        fullWidth
                        id="combo-box-detect"
                        options={languages}
                        sx={{ width: verySmallScreen ? '10ch' : smallScreen ? '20ch' : mediumScreen ? '30ch' : '40ch', m: 1 }}
                        renderInput={(params) => <TextField {...params} label="Base Language" />}
                    />
                </Grid>
                <Grid item>
                    <SwapLanguage />
                </Grid>
                <Grid item>
                    <Autocomplete
                        disablePortal
                        id="combo-box-translate"
                        options={languages}
                        sx={{ 
                            width: 
                            verySmallScreen ? '10ch' : 
                            smallScreen ? '20ch' : 
                            mediumScreen ? '30ch' : '40ch', 
                            m: 1 }}
                        renderInput={(params) => <TextField {...params} label="Converted Language" />}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}


class DetectBox extends React.Component {

    render() {
        return (
            <Box component="form" noValidateautoComplete="off">
                <TextField
                id="outlined-multiline-static"
                placeholder="Type Here"
                multiline
                fullWidth
                rows={9}
                InputProps={{
                    endAdornment: <InputAdornment position="end" style={{position: 'absolute', bottom: 30, left: 0}}>
                        <IconButton >
                            <MicIcon sx={{ color: grey[900] }}/>
                        </IconButton>
                        <IconButton >
                            <VolumeUpIcon sx={{ color: grey[900] }}/>
                        </IconButton>
                    </InputAdornment>,
                }}
                onKeyPress= {(e) => {
                    if (e.key === 'Enter') {
                      console.log('Enter key pressed');
                      
                    }
                }}
                /> 
            </Box>      
        );
    }
}


class TranslatedBox extends React.Component {
    render() {
        return (
            <Box component="form" noValidateautoComplete="off">
                <TextField
                id="outlined-multiline-static"
                placeholder="Translation"
                multiline
                disabled
                fullWidth
                rows={9}
                InputProps={{
                    endAdornment: <InputAdornment position="end" style={{position: 'absolute', bottom: 30, left: 0}}>
                        <IconButton >
                            <VolumeUpIcon sx={{ color: grey[900] }}/>
                        </IconButton>
                    </InputAdornment>,
                }}
                />    
            </Box>
        );
    }
}


class Translator extends React.Component {
    render() {
        return (
            <Grid container alignItems='center' justifyContent='center' style={{minHeight: '80vh'}}>
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