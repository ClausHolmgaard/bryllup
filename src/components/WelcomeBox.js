import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { Context } from '../function/Store';
import { titleText, bodyText, covidTitle, covidText } from '../Text/WelcomeText';

const WelcomeBox = () => {
    const { language } = useContext(Context)
    const [getLanguage, ,] = language;

    return (
        <Grid container direction='column' alignItems='center' justify='center'>
            
            <Grid container item xs={12} direction='column' alignItems='center' justify='center'>
                <Box pb={2}>
                    <Grid item>
                        <Typography variant='h3'>
                            <center>
                                {titleText.get(getLanguage)}
                            </center>
                        </Typography>
                    </Grid>
                </Box>
                <Grid item>
                    <center>
                        {bodyText.get(getLanguage).map((t, i) => <Typography variant='body1' key={i}>{t}</Typography>)}
                    </center>
                </Grid>
            </Grid>

            <br />
            <br />
            
            <Grid container item xs={12} direction='column' alignItems='center' justify='center'>
                <Box pb={2}>
                    <Grid item>
                        <Typography variant='h4'>
                            <center>
                                {covidTitle.get(getLanguage)}
                            </center>
                        </Typography>
                    </Grid>
                </Box>
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