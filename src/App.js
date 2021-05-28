import './App.css';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import StoreProvider from './function/Store';
import IntroBox from './components/IntroBox';
import NavBar from './components/NavBar';
import ImageGallery from './components/ImageGallery';
import MapBox from './components/MapBox';
import Wishlist from './components/Wishlist';
import WelcomeBox from './components/WelcomeBox';
import PlanBox from './components/PlanBox';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import SeperatorImage from './images/SeperatorKrusedulle.png';

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

    const getSeperator = () => {
        return (
            <Grid item xs={12} sm={12}>
                <center>
                    <img src={SeperatorImage} style={{maxHeight: '12vh', maxWidth: '100%'}} alt=''/>
                </center>
            </Grid>
        )
    }

    return (
        <StoreProvider>
            <ThemeProvider theme={theme}>
                <NavBar />
                <Grid container item xs={12} direction='column' justify='flex-start'>
                    <Grid item xs={12}>
                        <IntroBox mailUrl={mailUrl} />
                    </Grid>
                    <Box>
                        {getSeperator()}
                    </Box>
                    <Grid item xs={12} zeroMinWidth>
                        <WelcomeBox />
                    </Grid>
                    <Box pt={5} pb={5}>
                        {getSeperator()}
                    </Box>
                    <Grid container item xs={12}>
                        <PlanBox />
                    </Grid>
                    <Box pt={6} pb={8}>
                        {getSeperator()}
                    </Box>
                    <Grid container item style={{maxHeight: '50vh'}} xs={12} zeroMinWidth>
                        <ImageGallery imageUrl={getImageUrl()} />
                    </Grid>
                    <Box pt={10} pb={8}>
                        {getSeperator()}
                    </Box>
                    <Grid item xs={12}>
                        <Wishlist />
                    </Grid>
                    <Box pt={2} pb={8}>
                        {getSeperator()}
                    </Box>
                    <Grid item style={{minHeight: '50vh'}} xs={12}>
                        <MapBox mapUrl={mapUrl} />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </StoreProvider>
    );
}

export default App;
