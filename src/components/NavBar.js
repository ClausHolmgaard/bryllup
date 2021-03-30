import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from "@material-ui/core/Avatar";

import { Context } from '../function/Store'

import DanskFlag from '../images/DanskFlag.png';
import EnglishFlag from '../images/EnglishFlag.png';

const NavBar = () => {

    var buttonText = new Map();
    buttonText.set('english', 'Dansk');
    buttonText.set('dansk', 'English');
    
    const { language } = useContext(Context)
    const [getLanguage, setLanguage] = language;

    const languageClick = () => {
        if(getLanguage === 'dansk') {
            setLanguage('english');
        } else {
            setLanguage('dansk');
        }
        console.log('language: ' + getLanguage)
    }

    const getLanguageFlag = () => {
        return getLanguage === 'dansk' ? EnglishFlag : DanskFlag;
    }

    return(
        <div>
        <AppBar position="fixed" color='transparent' elevation={0}>
            <Toolbar>
                <Grid container item direction='row-reverse'>
                    {/*<Button onClick={languageClick}>{buttonText.get(getLanguage)}</Button>*/}
                    {/*<img src={DanskFlag} style={{maxHeight: '2em', maxWidth:'100%'}} alt=''/>*/}
                    <Button startIcon={<Avatar src={getLanguageFlag()} />} onClick={languageClick}>
                        {buttonText.get(getLanguage)}
                    </Button>
                </Grid>
                
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
