import React, {useState, useContext} from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { useMediaQuery } from "@material-ui/core";

import { Context } from '../function/Store';
import { helloText } from '../Text/IntroText';

import introImage from '../images/thaoper_main.jpg';
import topLeftFlower from '../images/flower_left_top.jpg';

const OK_TIMEOUT = 10000;

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '85vh'
}

const IntroBox = ({mailUrl}) => {
    const { language } = useContext(Context)
    const [getLanguage, ,] = language;
    const [sendStatus, setSendStatus] = useState(0);
    const [showRsvp, setShowRsvp] = useState(false);
    const [isParticipating, setIsParticipating] = useState('true');
    const [lastOk, setLastOk] = useState(0);

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [adultError, setAdultError] = useState(false);
    const [children0to3Error, setChildren0to3Error] = useState(false);
    const [children3to12Error, setChildren3to12Error] = useState(false);
    
    const [rsvpInfo, setRsvpInfo] = useState({
        nameText: '',
        emailText: '',
        adultText: '',
        children0to3Text: '',
        children3to12Text: '',
        allergyText: ''
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
            setNameError(true);
            error = true;
        }
        if(rsvpInfo['emailText'] === '') {
            setEmailError(true);
            error = true;
        }
        if(rsvpInfo['adultText'] === '') {
            setAdultError(true);
            error = true;
        }
        if(rsvpInfo['children0to3Text'] === '') {
            setChildren0to3Error(true);
            error = true;
        }
        if(rsvpInfo['children3to12Text'] === '') {
            setChildren3to12Error(true);
            error = true;
        }

        if(!error) {
            return true;
        } else {
            return false;
        }
    }

    const okClick = () => {

        if(Date.now() - lastOk < OK_TIMEOUT) {
            console.log('Ok clicked too often, waiting...');
            return;
        }
        setLastOk(Date.now());

        if(validateRsvp()) {
            console.log('Sending mail...');

            const payload = {
                'name': rsvpInfo['nameText'],
                'participating': isParticipating,
                'email': rsvpInfo['emailText'],
                'adults': rsvpInfo['adultText'],
                'children0to3': rsvpInfo['children0to3Text'],
                'children3to12': rsvpInfo['children3to12Text'],
                'allergy': rsvpInfo['allergyText']
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
        if(event.target.id === 'emailText') {
            setEmailError(false);
        }
        if(event.target.id === 'adultText') {
            setAdultError(false);
        }
        if(event.target.id === 'children0to3Text') {
            setChildren0to3Error(false);
        }
        if(event.target.id === 'children3to12Text') {
            setChildren3to12Error(false);
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

    const handleRadioChange = (event) => {
        setIsParticipating(event.target.value);
    }

    const getRSVP = () => {
        if(showRsvp) {
            return (
                <Grid container item direction='column'>
                    <Grid item xs={12}>
                    <RadioGroup value={isParticipating} onChange={handleRadioChange}>
                        <FormControlLabel value='true' control={<Radio color='primary'/>} label="Deltager" />
                        <FormControlLabel value='false' control={<Radio color='primary'/>} label="Deltager ikke" />
                    </RadioGroup>
                            
                       
                    </Grid>
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
                            id="emailText"
                            label="Email"
                            defaultValue=""
                            error={emailError}
                            onChange={handleRsvpChanges}/>
                    </Grid>


                    <Grid item xs={12}>
                        <TextField
                            style={{width: '100%'}}
                            required
                            id="adultText"
                            label="Antal voksne"
                            defaultValue=""
                            error={adultError}
                            onChange={handleRsvpChanges}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{width: '100%'}}
                            required
                            id="children0to3Text"
                            label="Børn under 3 år"
                            defaultValue=""
                            error={children0to3Error}
                            onChange={handleRsvpChanges}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            style={{width: '100%'}}
                            required
                            id="children3to12Text"
                            label="Børn far 3 til 12 år"
                            defaultValue=""
                            error={children3to12Error}
                            onChange={handleRsvpChanges}/>
                    </Grid>
                    
                    <Grid item xs={12}>
                    <TextField
                        style={{width: '100%'}}
                        id="allergyText"
                        label="Allergier"
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
                <Grid container item style={{paddingBottom: 5, paddingTop: 8}} justify='center'>
                    <Button variant="contained" color="primary" size='large' onClick={() => {setShowRsvp(true)}}>
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
                                <center>7. August Kl. 13:00</center>
                                <center>Hjørring</center>
                            </Typography>
                            <Grid item container xs={8}>
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
                                    <center>7. August Kl. 13:00</center>
                                    <center>Hjørring</center>
                                </Typography>
                            </Grid>
                            <Grid container item xs={12} sm={8}>
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