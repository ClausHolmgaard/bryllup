import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';

import { Context } from '../function/Store'

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
    <center>
        <h1>Something Something Title</h1>
    </center>
    `);
    titleText.set('dansk', `
    <center>
        <h1>Etellerandet Etellerandet Titel</h1>
    </center>
    `);

    var subtitleText = new Map();
    subtitleText.set('english', `
    <center>
        <h2>Something Subtitle</h2>
    </center>
    `);
    subtitleText.set('dansk', `
    <center>
        <h2>Etellerandet Undertitel</h2>
    </center>
    `);

    var mainText = new Map();
    mainText.set('english', `
    <center>
        Alot of text<br />
        About alot of things<br />
    </center>
    `)
    mainText.set('dansk', `
    <center>
        Masser af tekst<br />
        Endnu mere masser af text<br />
    </center>
    `)

    return (
        <Grid container style={style} direction='column' alignItems='center' justify='center'>
            <Grid item>
                <div dangerouslySetInnerHTML={{__html: titleText.get(getLanguage)}} />
            </Grid>
            <Grid item>
                <div dangerouslySetInnerHTML={{__html: subtitleText.get(getLanguage)}} />
            </Grid>
            <Grid item>
                <div dangerouslySetInnerHTML={{__html: mainText.get(getLanguage)}} />
            </Grid>
            
        </Grid>
    )
}

export default StoryBox;