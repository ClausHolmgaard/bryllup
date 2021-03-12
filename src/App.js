import './App.css';
import React from 'react';

import Grid from '@material-ui/core/Grid';

import StoreProvider from './function/Store';
import IntroBox from './components/IntroBox';
import StoryBox from './components/StoryBox';
import NavBar from './components/NavBar';
import ImageGallery from './components/ImageGalley';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'ABeeZee',
      'sans-serif',
    ].join(','),
  },});

function App() {
    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <NavBar />
                <Grid container item style={{width: '100vw'}} xs={12} spacing={0} direction='column' justify='flex-start'>
                    <Grid item style={{height: '100vh', width: '100%'}}>
                        <IntroBox />
                    </Grid>
                    <Grid item style={{height: '50vh', width: '100%'}} zeroMinWidth>
                        <StoryBox />
                    </Grid>
                    <Grid item style={{height: '50vh', width: '100%', maxHeight: '50vh'}} zeroMinWidth>
                            <ImageGallery />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </StoreProvider>
    );
}

export default App;
