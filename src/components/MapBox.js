import React, {useContext, useState, useLayoutEffect, useRef} from 'react';
import Grid from '@material-ui/core/Grid';

import { Context } from '../function/Store';
import { Typography } from '@material-ui/core';

//const mapUrl = 'http://127.0.0.1:5000/map';
const mapUrl = 'https://bryllup-test.herokuapp.com/map'

const MapBox = () => {
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

        <Grid container style={{height: '100%'}} xs={12} alignItems='center' justify='center'>
            <Grid container item xs={12} sm={6} direction='column' alignItems='center' justify='center'>
                <Grid item>
                    <Typography variant='h4'>
                        <center>
                            Adresse linje 1
                        </center>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='subtitle1'>
                        <center>
                            Mere adresse værk
                        </center>
                    </Typography>
                </Grid>
                <Grid item>
                    <br />
                </Grid>
            </Grid>
            <Grid item style={{height: '100%'}} xs={12} sm={6} ref={targetRef}>
                <iframe title='map' style={{height: '100%', width: '100%', border: '0px'}} src={getMapWithSize()}>IFrame troubles!</iframe>
            </Grid>
        </Grid>

    )
}

export default MapBox;