import React, {useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { Context } from '../function/Store';
import * as languageText from '../Text/PlanText';

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

    const toastmasterInfo = () => {
        return(
            <Grid item xs={12}>
                <Box pt={5}>
                    <center>{languageText.toastmasterText1.get(getLanguage)}</center>
                </Box>
                <Box>
                    <center>{languageText.toastmasterText2.get(getLanguage)}</center>
                </Box>
                <Box>
                    <center><a href = 'mailto: taler@buiholmgaard.dk'>{languageText.toastmasterEmail.get(getLanguage)}</a></center>
                </Box>
                <Box pt={5}>
                    <center>{languageText.partySongs.get(getLanguage)}</center>
                </Box>
            </Grid>
        )
    }

    return (
        <Grid container alignItems='center' justify='center'>
            
            <Grid container item xs={12} direction='column' alignItems='center' justify='center'>
                <Box pb={5}>
                    <Grid item>
                        <Typography variant='h3'>
                            <center>
                                {languageText.titleText.get(getLanguage)}
                            </center>
                        </Typography>
                    </Grid>
                </Box>

                <Grid container item xs={12} direction='column' alignItems='stretch'>
                    {tableEntry('13:00', languageText.firstEntryTitle.get(getLanguage), languageText.firstEntryText.get(getLanguage))}
                    {tableEntry('14:00', languageText.secondEntryTtitle.get(getLanguage), languageText.secondEntryText.get(getLanguage))}
                    {tableEntry('16:00', languageText.thirdEntryTitle.get(getLanguage), languageText.thirdEntryText.get(getLanguage))}
                    {tableEntry('17:00', languageText.fourthEntryTitle.get(getLanguage), languageText.fourthEntryText.get(getLanguage))}
                    {tableEntry('18:00', languageText.fifthEntryTitle.get(getLanguage), languageText.fifthEntryText.get(getLanguage))}
                </Grid>
            </Grid>
            
            
            {toastmasterInfo()}
            

            
            
        </Grid>
    )
}

export default PlanBox;