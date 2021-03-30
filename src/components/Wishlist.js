import React, {useContext, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { Context } from '../function/Store';
import {titleText, contactText, moreText} from '../Text/WishlistText';

const listOfWishes = new Map();
listOfWishes.set('english', [
    'Wish1',
    'Wish2',
    'wish3',
    'wish4',
    'wish5',
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
    'Ønske5',
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
            //backgroundColor: '#e1f1fc',
            //minHeight: '30vh',
            //height: fullHeight ? '100%' : '100%'
            height: '100%'
        }
        return style;
    }

    const getJustify = () => {
        const jus = fullHeight ? 'center' : 'flex-start';
        console.log(`setting justify: ${jus}`);
        return jus;
    }

    const getBottom = () => {
        if(fullHeight) {
            return getWishlist();
        } else {
            return (
            <div style={{width: '100%'}}>
                <center>
                     {contactText.get(getLanguage)}
                </center>
                <br />
                <br />
                <center>
                    <b>{moreText.get(getLanguage)}</b>
                </center>     
                <br />
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
            <Grid container item
                  onClick={handleClick}
                  xs={12}
                  style={getStyle()}
                  direction='column'
                  alignItems='center'
                  justify={getJustify()}>
                <Box pb={3}>
                    <Grid>
                        <Typography variant='h3'>
                            <center>
                                {titleText.get(getLanguage)}
                            </center>
                        </Typography>
                    </Grid>
                </Box>
                <Grid>
                    {getBottom()}
                </Grid>            
            </Grid>
    )
}

export default Wishlist;