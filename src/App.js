import './App.css';
import React from 'react';

import Grid from '@material-ui/core/Grid';

import StoreProvider from './function/Store';
import IntroBox from './components/IntroBox';
import StoryBox from './components/StoryBox';
import NavBar from './components/NavBar';
import ImageGallery from './components/ImageGallery';
import MapBox from './components/MapBox';
import Wishlist from './components/Wishlist';

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
                <Grid container item xs={12} spacing={0} direction='column' justify='flex-start'>
                    <Grid item xs={12}>
                        <IntroBox />
                    </Grid>
                    <Grid item style={{height: '50vh'}} xs={12} zeroMinWidth>
                        <StoryBox />
                    </Grid>
                    <Grid item style={{maxHeight: '50vh'}} xs={12} zeroMinWidth>
                        <ImageGallery />
                    </Grid>
                    <Grid item xs={12}>
                        <Wishlist />
                    </Grid>
                    <Grid item style={{height: '50vh'}} xs={12}>
                        <MapBox />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </StoreProvider>
    );
}

export default App;
