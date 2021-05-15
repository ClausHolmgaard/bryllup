import React, {useContext, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { Context } from '../function/Store';
import {titleText, contactText, moreText, lessText, listOfWishes} from '../Text/WishlistText';

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
        //console.log(`setting justify: ${jus}`);
        return jus;
    }

    const getBottom = () => {
        if(fullHeight) {
            return (
                <div>
                    {getWishlist()}
                    <br/>
                    <center>
                        <b>{lessText.get(getLanguage)}</b>
                    </center>
                </div>
            )
        } else {
            return (
                <div style={{width: '100%'}}>
                    <center>
                        <b>{moreText.get(getLanguage)}</b>
                    </center>     
                    <br />
                </div>
            )
        }
    }

    const getTextWithLink = (element) => {
        if(element[1] === '') {
            return (
                <center>{element[0]}</center>
            )
        } else {
            return(
                <center><a rel={'external'} target='_blank' href={element[1]}>{element[0]}</a></center>
            )
        }
    }

    const getWishlist = () => {
        return (
            <List onClick={(e) => e.stopPropagation()} style={{maxHeight: '100%', overflow:'hidden'}}>
                {listOfWishes.get(getLanguage).map((w, i) => <ListItemText key={i}>{getTextWithLink(w)}</ListItemText>)}
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
                    <center>{contactText.get(getLanguage)}</center>
                    <center><a onClick={(e) => e.stopPropagation()} href = 'mailto: gaver@buiholmgaard.dk'>Send Email</a></center>
                    <br/>
                    <br/>
                    {getBottom()}
                </Grid>
            </Grid>
    )
}

export default Wishlist;