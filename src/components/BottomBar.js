import React, {useState, useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { Context } from '../function/Store'
import ParkingModal from './ParkingModal.js'

import * as LanguageText from '../Text/BottombarText';

const BottomBar = () => {
    const { language } = useContext(Context)
    const [getLanguage, setLanguage] = language;
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    }

    return(
        <div>
            <AppBar position="fixed" elevation={0} style={{top: 'auto', bottom: 0}}>
                <Toolbar>
                    <Grid container item justify='center'>
                        <Button onClick={handleOpen} variant="contained" color="primary" size='large'>
                            {LanguageText.parkingNoteText.get(getLanguage)}
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
            <ParkingModal setOpen={setIsModalOpen} getOpen={isModalOpen} />
        </div>
    )
}
export default BottomBar;
