import React, {useContext, useState, useLayoutEffect, useRef} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { Context } from '../function/Store';
import * as LanguageText from '../Text/MapText';

import GreenMapPin from '../images/GreenMapPin.png';
import BlueMapPin from '../images/BlueMapPin.png';
import YellowMapPin from '../images/YellowMapPin.png';
import RedMapPin from '../images/RedMapPin.png';

const MapBox = ({mapUrl}) => {
    const { language } = useContext(Context)
    const [getLanguage, ,] = language;
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });

    const updateMapSize = () => {
        if (targetRef.current) {
            //console.log(`height: ${targetRef.current.offsetWidth}, width: ${targetRef.current.offsetHeight}`)
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', updateMapSize);
        updateMapSize();
        return () => window.removeEventListener('resize', updateMapSize);
    }, []);

    const getMapWithSize = () => {
        const sizeUrl = `${mapUrl}?height=${dimensions.height}&width=${dimensions.width}`;
        //console.log(sizeUrl);
        return sizeUrl;
    }

    const getTitleWithImage = (title, image) => {
        return (
            <Grid container item direction='row'>
                <Grid item>
                    <Typography variant='h5'>
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    <img src={image} style={{maxHeight: '1em', maxWidth:'100%'}} alt=''/>
                </Grid>
            </Grid>
        )
    }

    const getLocationText = () => {
        return (
            <Grid container item xs={12} sm={4} justify='center' direction='column'>
                <Grid container item direction='column'>
                    {getTitleWithImage(LanguageText.churchText.get(getLanguage), BlueMapPin)}
                    <Typography variant='subtitle1'>
                        Sankt Maria, martyrernes Dronning
                    </Typography>
                    <Typography variant='subtitle1'>
                        Bispensgade 67
                    </Typography>
                    <Typography variant='subtitle1'>
                        9800 Hjørring
                    </Typography>
                </Grid>

                <Grid item>
                    <br />
                </Grid>
                
                <Grid item>
                    {getTitleWithImage(LanguageText.partyText.get(getLanguage), GreenMapPin)}
                    <Typography variant='subtitle1'>
                        Vendelbohus
                    </Typography>
                    <Typography variant='subtitle1'>
                        Nørregade 22
                    </Typography>
                    <Typography variant='subtitle1'>
                        9800 Hjørring
                    </Typography>
                </Grid>

                <Grid item>
                    <br />
                </Grid>

                <Grid container item direction='column'>
                    {getTitleWithImage(LanguageText.parkingText.get(getLanguage), YellowMapPin)}
                    <Grid container item direction='row'>
                        <Grid item>
                            <Typography variant='subtitle1'>
                                Kirkepladsen, p. Plads
                            </Typography>
                            <Typography variant='subtitle1'>
                                9800 Hjørring
                            </Typography>
                        </Grid>
                        <Box pl={7}>
                            <Grid item>
                                <Typography variant='subtitle1'>
                                    Sct. Olai Plads
                                </Typography>
                                <Typography variant='subtitle1'>
                                    9800 Hjørring
                                </Typography>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>

                <Grid item>
                    <br />
                </Grid>

                <Grid item>
                    {getTitleWithImage('Hotel', RedMapPin)}
                    <Typography variant='subtitle1'>
                        <a href='https://phoenix-hjoerring.dk/'>Hotel Phønix Hjørring</a>
                    </Typography>
                    <Typography variant='subtitle1'>
                        Jernbanegade 6
                    </Typography>
                    <Typography variant='subtitle1'>
                        9800 Hjørring
                    </Typography>
                </Grid>

            </Grid>
        )
    }

    return (
        <Grid container direction='column' alignItems='stretch'>
            <Box pb={3}>
                <Grid item xs={12}>
                    <Typography variant='h3'>
                        <center>
                            {LanguageText.locationText.get(getLanguage)}
                        </center>
                    </Typography>
                </Grid>
            </Box>
            <Grid container item xs={12} direction='row' alignItems='stretch' justify='center'>
                
                <Grid item sm={2}>

                </Grid>

                {getLocationText()}
                

                <Grid container item xs={12} sm={6} ref={targetRef} style={{minHeight: '50vh'}}>
                    <iframe
                        title='map'
                        style={{height: '100%',
                                width: '100%',
                                border: '0px'}}
                        scrolling='no'
                        src={getMapWithSize()}>
                            IFrame troubles!
                    </iframe>
                </Grid>
                
            </Grid>  
            
        </Grid>

    )
}

export default MapBox;