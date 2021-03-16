import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { Context } from '../function/Store';
import { titleText, subtitleText, mainText } from '../Text/StoryText';

const style = {
    height: '100%',
    width: '100%',
    backgroundColor: '#fcf1d2'
};

const StoryBox = () => {
    const { language } = useContext(Context)
    const [getLanguage, ,] = language;

    return (
        <Grid container style={style} direction='column' alignItems='center' justify='center'>
            {/* Assuming same layout for all languages */}
            <Grid item>
                <Typography variant='h4'>
                    <center>
                        {titleText.get(getLanguage)}
                    </center>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='subtitle1'>
                    <center>
                        {subtitleText.get(getLanguage)}
                    </center>
                </Typography>
            </Grid>
            <Grid item>
                <center>
                    {mainText.get(getLanguage).map((t, i) => <Typography variant='body2' key={i}>{t}</Typography>)}
                </center>
            </Grid>
        </Grid>
    )
}

export default StoryBox;