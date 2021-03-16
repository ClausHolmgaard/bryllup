import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import { Context } from '../function/Store';
import {
    titleText,
    firstEntryTitle,
    firstEntryText,
    secondEntryTtitle,
    secondEntryText,
    thirdEntryTitle,
    thirdEntryText,
    fourthEntryTitle,
    fourthEntryText,
    fifthEntryTitle,
    fifthEntryText} from '../Text/PlanText';

const PlanBox = () => {
    const { language } = useContext(Context)
    const [getLanguage, ,] = language;

    const timeEntry = (time) => {
        return (
            <Grid item xs={6}>
                <Typography variant='body1'>
                    <center>
                        {time}
                    </center>
                </Typography>
            </Grid>
        )
    }

    const textEntry = (title, text) => {
        return (
            <Grid item xs={6}>
                <Typography variant='body1'>
                    <b>{title}</b>
                </Typography>
                <Typography variant='body1'>
                    {text}
                </Typography>
            </Grid>
        )
    }

    const tableEntry = (time, title, text) => {
        return (
            <Grid container item xs={12} sm={8} direction='row' alignItems='flex-start'>
                {timeEntry(time)}
                {textEntry(title, text)}
            </Grid>
        )
    }

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

                <Grid container item xs={12} direction='column' alignItems='center'>
                    {tableEntry('13:00', firstEntryTitle.get(getLanguage), firstEntryText.get(getLanguage))}
                    {tableEntry('14:00', secondEntryTtitle.get(getLanguage), secondEntryText.get(getLanguage))}
                    {tableEntry('16:00', thirdEntryTitle.get(getLanguage), thirdEntryText.get(getLanguage))}
                    {tableEntry('17:00', fourthEntryTitle.get(getLanguage), fourthEntryText.get(getLanguage))}
                    {tableEntry('18:00', fifthEntryTitle.get(getLanguage), fifthEntryText.get(getLanguage))}
                </Grid>
            </Grid>
            
            

            
            
        </Grid>
    )
}

export default PlanBox;