import React, {useContext, useState, useLayoutEffect, useRef} from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { Context } from '../function/Store';
import { churchText, partyText } from '../Text/MapText';

const MapBox = ({mapUrl}) => {
    const { language } = useContext(Context)
    const [getLanguage, ,] = language;
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });

    const updateMapSize = () => {
        if (targetRef.current) {
            console.log(`height: ${targetRef.current.offsetWidth}, width: ${targetRef.current.offsetHeight}`)
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
        console.log(sizeUrl);
        return sizeUrl;
    }

    return (

        <Grid container style={{height: '100%'}} alignItems='center' justify='center'>
            <Grid container item xs={12} sm={6} direction='row' alignItems='center' justify='center'>
                <Grid item xs={4}></Grid>

                <Grid container item xs={4} direction='column'>
                    <Grid item>
                        <Typography variant='h5'>
                            {churchText.get(getLanguage)}
                        </Typography>
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
                        <Typography variant='h5'>
                            {partyText.get(getLanguage)}
                        </Typography>
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
                </Grid>
                

                <Grid item xs={4}></Grid>
                
            </Grid>  
                
                
                
            <Grid container item style={{height: '100%'}} xs={12} sm={6} ref={targetRef}>
                <iframe title='map' style={{height: '100%', width: '100%', border: '0px'}} src={getMapWithSize()}>IFrame troubles!</iframe>
            </Grid>
        </Grid>

    )
}

export default MapBox;