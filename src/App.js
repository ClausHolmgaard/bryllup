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
import WelcomeBox from './components/WelcomeBox';
import PlanBox from './components/PlanBox';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const imageUrl = process.env.REACT_APP_IMAGE_URL;
const mapUrl = process.env.REACT_APP_MAP_URL;
const mailUrl = process.env.REACT_APP_MAIL_URL;

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'ABeeZee',
      'sans-serif',
    ].join(','),
  },});

function App() {

    const getImageUrl = () => {
        console.log(`imageUrl: ${imageUrl}`);
        return imageUrl;
    }

    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <NavBar />
                <Grid container item xs={12} direction='column' justify='flex-start'>
                    <Grid item xs={12}>
                        <IntroBox mailUrl={mailUrl} />
                    </Grid>
                    <Grid item xs={12} zeroMinWidth>
                        <WelcomeBox />
                    </Grid>
                    <Grid container item xs={12}>
                        <PlanBox />
                    </Grid>
                    <Grid item style={{maxHeight: '50vh'}} xs={12} zeroMinWidth>
                        <ImageGallery imageUrl={getImageUrl()} />
                    </Grid>
                    <Grid item xs={12}>
                        <Wishlist />
                    </Grid>
                    <Grid item style={{height: '50vh'}} xs={12}>
                        <MapBox mapUrl={mapUrl} />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </StoreProvider>
    );
}

export default App;
