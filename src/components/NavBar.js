import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { Context } from '../function/Store'

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

    return(
        <div>
        <AppBar position="fixed" color='transparent' elevation={0}>
            <Toolbar>
                <Grid container item direction='row-reverse'>
                    <Button onClick={languageClick}>{buttonText.get(getLanguage)}</Button>
                </Grid>
                
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
