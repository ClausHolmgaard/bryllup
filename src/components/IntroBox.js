import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//import sticks from '../images/sticks.png';
import introImage from '../images/thaoper_main.jpg';
import backgroundImage from '../images/flower_corner.png';

const introStyle = {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '85vh'
}

const IntroBox = () => {
    return(
        <Grid container item style={{height: '100%'}} direction='row'>
            <Grid container item xs={6} direction='column'>
                <Grid item>
                    <img src={backgroundImage} style={{maxWidth: '50vw'}} alt=''/>
                </Grid>
                <Grid item >
                    <Typography variant="h2">
                        <center>Per & Thao</center>
                    </Typography>
                    <Typography variant='h4'>
                        <center>D. 7. August Kl. 13:00 i Hjørring</center>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container item xs={6} alignItems='center'>
                <Paper style={imageStyle}>
                    <img src={introImage} style={imageStyle}  alt=''/>
                </Paper>
            </Grid>
        </Grid>
        
        
        /*
        <Grid container style={introStyle} direction='row' wrap='nowrap'>
            <Grid container style={{height: '100%', width: '100%'}} justify='space-evenly' alignItems='center'>
                <Grid container item>
                    <Typography variant="h2">
                        <center>Per & Thao</center>
                    </Typography>
                    <Typography variant='h4'>
                        <center>D. 7. August Kl. 13:00 i Hjørring</center>
                    </Typography>
                </Grid>
                <Grid item>
                    <Paper style={imageStyle}>
                        <img src={introImage} style={imageStyle}  alt=''/>
                    </Paper> 
                </Grid>
            </Grid>
        </Grid>
        */
        
    )
}

export default IntroBox