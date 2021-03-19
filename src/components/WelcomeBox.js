import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { Context } from '../function/Store';
import { titleText, bodyText, covidTitle, covidText } from '../Text/WelcomeText';

import flowerFrame from '../images/flower_frame.jpg';

const imageBackgroundStyle = {
    backgroundImage: `url(${flowerFrame})`,
    //backgroundSize: 'cover',
    backgroundPosition: 'left-top',
    backgroundRepeat: 'no-repeat'

};

const WelcomeBox = () => {
    const { language } = useContext(Context)
    const [getLanguage, ,] = language;

    return (
        <Grid container direction='column' alignItems='center' justify='center'>
            
            <Grid container item xs={12} direction='column' alignItems='center' justify='center'>
                <Grid item>
                    <Typography variant='h2'>
                        <center>
                            {titleText.get(getLanguage)}
                        </center>
                    </Typography>
                </Grid>
                <Grid item>
                    <center>
                        {bodyText.get(getLanguage).map((t, i) => <Typography variant='body1' key={i}>{t}</Typography>)}
                    </center>
                </Grid>
            </Grid>

            <br />
            
            <Grid container item xs={12} direction='column' alignItems='center' justify='center'>
                <Grid item>
                    <Typography variant='h4'>
                        <center>
                            {covidTitle.get(getLanguage)}
                        </center>
                    </Typography>
                </Grid>
                <Grid item>
                    <center>
                        {covidText.get(getLanguage).map((t, i) => <Typography variant='body2' key={i}>{t}</Typography>)}
                    </center>
                </Grid>
            </Grid>
            
            <br />
        </Grid>
    )
}

export default WelcomeBox;