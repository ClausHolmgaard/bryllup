import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';

import { Context } from '../function/Store'
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
            {/*
            <Grid item>
                <div dangerouslySetInnerHTML={{__html: titleText.get(getLanguage)}} />
            </Grid>
            <Grid item>
                <div dangerouslySetInnerHTML={{__html: subtitleText.get(getLanguage)}} />
            </Grid>
            <Grid item>
                <div dangerouslySetInnerHTML={{__html: mainText.get(getLanguage)}} />
            </Grid>
            */}

            {/* Assuming same layout for all languages */}
            <Grid item>
                <Typography variant='h4'>
                    {titleText.get(getLanguage)}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='subtitle1'>
                    {subtitleText.get(getLanguage)}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='body2'>
                    {mainText.get(getLanguage).map(t => <center>{t}</center>)}
                </Typography>
            </Grid>


        </Grid>
    )
}

export default StoryBox;