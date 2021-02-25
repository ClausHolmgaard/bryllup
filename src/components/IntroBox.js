import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import sticks from '../images/sticks.png';
import flowerback from '../images/flower_back.jpg';

const introStyle = {
    height: '100%',
    width: '100%',
    backgroundImage: `url(${flowerback})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};

const imageStyle = {
    maxWidth: '100%'
}

const IntroBox = () => {
    return(
        <Grid container style={introStyle} direction='row' wrap="nowrap">
            <Grid container justify='space-evenly' alignItems='center'>
                <Grid item>
                    <Typography variant="h3">
                        <center>Per og Thao</center>
                    </Typography>
                    <h3>
                        <center>D. 7. August Kl. 13:00 i Hjørring</center>
                    </h3>
                    
                </Grid>
                <Grid item>
                    <Paper>
                        <img src={sticks} style={imageStyle}/>
                    </Paper> 
                </Grid>
            </Grid>
        </Grid>
    )
}

export default IntroBox