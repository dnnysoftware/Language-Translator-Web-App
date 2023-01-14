import React from 'react'
import { useState } from 'react';
import { Typography, AppBar, Toolbar, CssBaseline, Button, Grid} from '@mui/material'




const Header = () => {

  const pages = {'Portfolio': 'https://www.google.com/', 'Github': 'https://github.com/dnnysoftware'};

  const [isHovered, setIsHovered] = useState({});

  const [setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  
  return (
      <CssBaseline>
        <AppBar position='relative' style={{ background: '#73BCE0' }}>
          <Toolbar>
            <Grid container alignItems='center' justify='space-between'>
              <Grid item xs={12} md={8}>
                <Typography variant='h4' color={'#fff'}>Language Translator Web App</Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                  {Object.entries(pages).map(([key, value], index) => (
                    <Button
                      key={key}
                      style={{
                        backgroundColor: isHovered[index] ? '#fff' : 'transparent',
                        color: isHovered[index] ? 'black' : 'white',
                        padding: '10px',
                        margin: '5px',
                        borderRadius: '5px'
                      }}
                      onMouseEnter={() => {
                        const newIsHovered = {...isHovered};
                        newIsHovered[index] = true;
                        setIsHovered(newIsHovered);
                      }}
                      onMouseLeave={() => {
                        const newIsHovered = {...isHovered};
                        newIsHovered[index] = false;
                        setIsHovered(newIsHovered);
                      }}
                      onClick={handleCloseNavMenu}
                      href={value}
                    >
                      {key}
                    </Button>
                  ))}
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </CssBaseline>
  )
}

export default Header