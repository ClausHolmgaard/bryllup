import React, {useContext, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';

import { Context } from '../function/Store';
import { Typography } from '@material-ui/core';

const listOfWishes = new Map();
listOfWishes.set('english', [
    'Wish1',
    'Wish2',
    'wish3',
    'wish4',
    'wish5'
])
listOfWishes.set('dansk', [
    'Ønske1',
    'Ønske2',
    'Ønske3',
    'Ønske4',
    'Ønske5'
])

const Wishlist = () => {
    const { language } = useContext(Context)
    const [getLanguage, ,] = language;
    const [fullHeight, setFullHeight] = useState(false)

    const handleClick = () => {
        setFullHeight(!fullHeight);
    }

    const getStyle = () => {
        const style = {
            height: fullHeight ? '100%' : '50vh'
        }
        console.log(`Getting style: ${style}`);
        return style;
    }

    const getBottom = () => {
        if(fullHeight) {
            return getWishlist();
        } else {
            return (
            <div style={{width: '100%', background: 'linear-gradient(#ffffff, #8a8a8a)'}}>
                <center>
                    {/*<ExpandMoreSharpIcon />*/}
                </center>     
            </div>
            )
        }
    }

    const getWishlist = () => {
        return (
        <List style={{maxHeight: '100%', overflow:'hidden'}}>
            {listOfWishes.get(getLanguage).map((w, i) => <ListItem key={i}><center>{w}</center></ListItem>)}
        </List>
        )
    }

    return (
        <Grid container onClick={handleClick} style={{paddingBottom: '50px', paddingTop: '50px'}} direction='column' alignItems='center' justify='center'>
            <Grid container item xs={12} style={getStyle()} direction='column' alignItems='center' justify='center'>
                <Grid item>
                    <Typography variant='h4'>
                        <center>
                            Ønskeliste
                        </center>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='subtitle1'>
                        <center>
                            Tryk for mere!
                        </center>
                    </Typography>
                </Grid>
                
                
            </Grid>
            <Grid item xs={12}>
                {getBottom()}
            </Grid>
        </Grid>
    )
}

export default Wishlist;