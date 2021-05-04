import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
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
            <Grid item xs={2} sm={6}>
                <center>
                    {time}
                </center>
            </Grid>
        )
    }

    const textEntry = (title, text) => {
        return (
            <Grid item xs={12} sm={10}>
                <Box pb='1em'>
                    <Typography variant='body1'>
                        <b>{title}</b>
                    </Typography>
                    <Typography variant='body1'>
                        {text}
                    </Typography>
                </Box>
            </Grid>
        )
    }

    const tableEntry = (time, title, text) => {
        return (
            <Grid container item xs={12} direction='row' alignItems='flex-start' justify='flex-end'>
                <Grid container item xs={4} sm={3} justify='center'>
                    {timeEntry(time)}
                </Grid>
                <Grid container item xs={8} sm={6} justify='flex-start' wrap='nowrap'>
                    {textEntry(title, text)}
                </Grid>
                
                
                
            </Grid>
        )
    }

    return (
        <Grid container direction='column' alignItems='center' justify='center'>
            
            <Grid container item xs={12} direction='column' alignItems='center' justify='center'>
                <Box pb={5}>
                    <Grid item>
                        <Typography variant='h3'>
                            <center>
                                {titleText.get(getLanguage)}
                            </center>
                        </Typography>
                    </Grid>
                </Box>

                <Grid container item xs={12} direction='column' alignItems='stretch'>
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