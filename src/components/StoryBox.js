import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';

import { Context } from '../function/Store';
import { Typography } from '@material-ui/core';

const style = {
    height: '100%',
    width: '100%',
    backgroundColor: '#fcf1d2'
};

const StoryBox = () => {
    const { language } = useContext(Context)
    const [getLanguage, ,] = language;

    var titleText = new Map();
    titleText.set('english', `
        Something Something Title
    `);
    titleText.set('dansk', `
        Etellerandet Etellerandet Titel
    `);

    var subtitleText = new Map();
    subtitleText.set('english', `
        Something Subtitle
    `);
    subtitleText.set('dansk', `
        Etellerandet Undertitel
    `);

    var mainText = new Map();
    mainText.set('english', [
        'Alot of text',
        'About alot of things'
    ])
    mainText.set('dansk', [
        'Masser af tekst',
        'Endnu mere masser af text'
    ])

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