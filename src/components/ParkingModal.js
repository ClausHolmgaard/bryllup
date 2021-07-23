import React, {useState, useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { Context } from '../function/Store';
import * as LanguageText from '../Text/ParkingText';

import ParkingImageEnglish from '../images/ParkingInfoEnglish.png';
import ParkingImageDanish from '../images/ParkingInfoDanish.png';

const imageStyle = {
    maxWidth: '80vw',
    maxHeight: '60vh'
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const ParkingModal = ({setOpen, getOpen}) => {
    const { language } = useContext(Context)
    const [getLanguage, setLanguage] = language;
    const [modalStyle] = useState(getModalStyle);
    
    const classes = useStyles();
    
    function getModalStyle() {
        const top = 50;
        const left = 50;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const getImage = () => {
        return getLanguage == 'dansk' ? ParkingImageDanish : ParkingImageEnglish;
    }

    const body = (
        <div className={classes.paper} style={modalStyle}>
            <center>
                <h2>{LanguageText.parkingHeader.get(getLanguage)}</h2>
            </center>

            <div style={{marginBottom: '1em'}}>
                {LanguageText.parkingInfo1.get(getLanguage)}<br/>
                {LanguageText.parkingInfo2.get(getLanguage)}<br/>
                {LanguageText.parkingInfo3.get(getLanguage)}
            </div>
            
            <center>
                <img src={getImage()} style={imageStyle}></img>
            </center>
            
        </div>
    );

    return(
        <div onClick={handleClose}>
            <Modal
                open={getOpen !== undefined ? getOpen : false}
                onClose={handleClose}
                aria-labelledby=""
                aria-describedby=""
            >
                {body}
            </Modal>
        </div>
    )
}

export default ParkingModal;