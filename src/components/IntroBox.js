import React, {useState, useContext} from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useMediaQuery } from "@material-ui/core";

import { Context } from '../function/Store';
import { helloText } from '../Text/IntroText';

import introImage from '../images/thaoper_main.jpg';
import topLeftFlower from '../images/flower_left_top.jpg';

const introStyle = {
    height: '100%',
    width: '100%',
};

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '85vh'
}

const IntroBox = ({mailUrl}) => {
    const { language } = useContext(Context)
    const [getLanguage, ,] = language;
    const [sendStatus, setSendStatus] = useState(0);
    const [showRsvp, setShowRsvp] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [adultError, setAdultError] = useState(false);
    const [childrenError, setChildrenError] = useState(false);
    const [rsvpInfo, setRsvpInfo] = useState({
        nameText: '',
        phoneText: '',
        adultText: '',
        childrenText: '',
        commentText: ''
      });

    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));

    const getMainStyle = () => {
        return({
            minHeight: '100vh',
            height: '100%'
            //height: showRsvp ? '100%' : '100vh'
        })
    }

    const validateRsvp = () => {
        let error = false;
        if(rsvpInfo['nameText'] === '') {
            error = true;
        }
        if(rsvpInfo['phoneText'] === '') {
            error = true;
        }
        if(rsvpInfo['adultText'] === '') {
            error = true;
        }
        if(rsvpInfo['childrenText'] === '') {
            error = true;
        }

        if(!error) {
            return true;
        } else {
            return false;
        }
    }

    const okClick = () => {
        if(validateRsvp()) {
            console.log('Sending mail...');

            const payload = {
                'name': rsvpInfo['nameText'],
                'phone': rsvpInfo['phoneText'],
                'adults': rsvpInfo['adultText'],
                'children': rsvpInfo['childrenText'],
                'comment': rsvpInfo['commentText']
            }

            fetch(mailUrl, {
                method: 'post', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
                })
                .then(res => {
                    console.log(res.status);
                    setSendStatus(res.status);
                })
                .catch(err => console.log(err))
        } else {
            console.log('Validation failed, not sending mail.')
        }
    }

    const handleRsvpChanges = (event) => {
        setRsvpInfo({ ...rsvpInfo, [event.target.id]: event.target.value });
        if(event.target.id === 'nameText') {
            setNameError(false);
        }
        if(event.target.id === 'phoneText') {
            setPhoneError(false);
        }
        if(event.target.id === 'adultText') {
            setAdultError(false);
        }
        if(event.target.id === 'childrenText') {
            setChildrenError(false);
        }
    }

    const getResultView = () => {
        if(sendStatus === 0) {
            
        } else if(sendStatus === 200) {
            return(
                <Grid item>
                    <center>Svar er modtaget</center>
                </Grid>
            )
        } else {
            return(
                <Grid item>
                    <center>Problem med afsendelse af svar</center>
                    <center>Tag venligst konkakt</center>
                </Grid>
            )
        }
    }

    const getRSVP = () => {
        if(showRsvp) {
            return (
                <Grid container item direction='column'>
                    
                    <Grid item xs={12}>
                        <TextField
                            style={{width: '100%'}}
                            required
                            id="nameText"
                            label="Navn"
                            defaultValue=""
                            error={nameError}
                            onChange={handleRsvpChanges}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{width: '100%'}}
                            required
                            id="phoneText"
                            label="Telefon"
                            defaultValue=""
                            error={phoneError}
                            onChange={handleRsvpChanges}/>
                    </Grid>

                    <Grid container item direction='row'>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="adultText"
                                label="Antal voksne"
                                defaultValue=""
                                error={adultError}
                                onChange={handleRsvpChanges}/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="childrenText"
                                label="Antal børn"
                                defaultValue=""
                                error={childrenError}
                                onChange={handleRsvpChanges}/>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={12}>
                    <TextField
                        style={{width: '100%'}}
                        id="commentText"
                        label="Kommentar"
                        multiline
                        rowsMax={4}
                        rows={4}
                        onChange={handleRsvpChanges}
                        />
                    </Grid>
                    
                    <Grid container item xs={12} style={{paddingBottom: 5, paddingTop: 5}} justify='space-between'>
                        <Button variant="contained" color="primary" onClick={() => {setShowRsvp(false); setSendStatus(0)}}>
                            Afbryd
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => okClick()}>
                            Ok
                        </Button>
                    </Grid>
                    {getResultView()}
                </Grid>
            )
        } else {
            return (
                <Grid item style={{paddingBottom: 5, paddingTop: 5}}>
                    <Button variant="contained" color="primary" onClick={() => {setShowRsvp(true)}}>
                        RSVP
                    </Button>
                </Grid>
            )
        }
    }

    const getPictureAndText = () => {
        
        if(isSmallScreen) {
            return (
                <Grid container item style={getMainStyle()} direction='row'>
                    <Grid container item xs={12} direction='column'>
                        <Grid item>
                            <img src={topLeftFlower} style={{maxWidth: '50vw', maxHeight: '12vh'}} alt=''/>
                        </Grid>

                        <Grid container item direction='column' alignItems='center' justify='center'>

                            <Typography variant="h3">
                                <center>{helloText.get(getLanguage)}</center>
                            </Typography>
                            <Typography variant="h4">
                                <center>Per & Thao</center>
                            </Typography>
                            
                     
                            <Paper style={imageStyle} elevation={0}>
                                <img src={introImage} style={imageStyle}  alt=''/>
                            </Paper>
                            <Typography variant='h4'>
                                <center>D. 7. August Kl. 13:00 i Hjørring</center>
                            </Typography>
                            <Grid item>
                                {getRSVP()}
                            </Grid>
                            
                        </Grid>
                    </Grid>

                </Grid>
            )
        } else {
            return (
                <Grid container item style={getMainStyle()} direction='row'>
                    <Grid container item xs={12} sm={6} direction='column'>
                        <Grid item>
                            <img src={topLeftFlower} style={{maxWidth: '50vw', maxHeight: '50vh'}} alt=''/>
                        </Grid>

                        <Grid container item direction='column' alignItems='center' justify='center'>
                            <Grid>
                                <Typography variant="h2">
                                    <center>{helloText.get(getLanguage)}</center>
                                </Typography>
                                <Typography variant="h3">
                                    <center>Per & Thao</center>
                                </Typography>
                                <Typography variant='h4'>
                                    <center>D. 7. August Kl. 13:00 i Hjørring</center>
                                </Typography>
                            </Grid>
                            <Grid item>
                                {getRSVP()}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} alignItems='center'>
                        <Paper style={imageStyle}>
                            <img src={introImage} style={imageStyle}  alt=''/>
                        </Paper>
                    </Grid>
                </Grid>
            )
        }
    }

    return(
        <div>
            {getPictureAndText()}
        </div>
        
    )
}

export default IntroBox