import React, {useContext, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import { Context } from '../function/Store';
import {titleText, contactText, moreText} from '../Text/WishlistText';

const listOfWishes = new Map();
listOfWishes.set('english', [
    ['Philips HD9650/90 Airfryer XXL Avance', 'https://www.elgiganten.dk/product/husholdning/kokkenudstyr/frituregryder-og-airfryer/HD965090/philips-avance-collection-airfryer-xxl-hd9650-90?utm_id=91g3i1&utm_source=partnerads&utm_medium=affiliate&utm_campaign=b2c-loc-partnerads-running&utm_content=all'],
    ['Greenpan Premier stegepande 30cm', 'https://www.imerco.dk/greenpan-premiere-stegepande?id=100405349'],
    ['Greenpan Premier stegepande 24cm', 'https://www.imerco.dk/greenpan-premiere-stegepande?id=100405347'],
    ['Greenpan Premier Wok', 'https://www.imerco.dk/greenpan-premiere-wok?id=100405351'],
    ['Scanpan bradepande 5 liter', 'https://www.kop-kande.dk/scanpan-classic-bradepande-5-ltr-39x27-cm-083421353214'],
    ['Dyson V11', 'https://www.elgiganten.dk/product/husholdning/stovsuger-og-rengoring/179558/dyson-v11-2020-torque-drive-extra-ledningslos-stovsuger'],
    ['WMF Steak Bestiksæt - 12 dele', 'https://www.imerco.dk/wmf-steak-bestiksaet-12-dele?id=100023195'],
    ['Kenwood Chef XL KVL4100S', 'https://www.elgiganten.dk/product/husholdning/kokkenudstyr/kokkenmaskiner/KVL4100S/kenwood-chef-xl-kokkenmaskine-kvl4100s-solv-tank-testvinder?utm_id=91g3i1&utm_source=partnerads&utm_medium=affiliate&utm_campaign=b2c-loc-partnerads-running&utm_content=all'],
    ['Gavekort til wellness ophold', ''],
    ['Gavekort til gourmetophold', ''],
    ['Gavekort til slotsophold', ''],
    ['Træningsbænk - skrå - 300 kg', 'https://shop.getbig.dk/semi-pro-skraabaenk-ms-l101'],
    ['Gavekort til træningsudstyr ved LC Gear', ''],
    ['Gavekort til træningsudstyr ved Rogue Europe', '']
])
listOfWishes.set('dansk', [
    ['Philips HD9650/90 Airfryer XXL Avance', 'https://www.elgiganten.dk/product/husholdning/kokkenudstyr/frituregryder-og-airfryer/HD965090/philips-avance-collection-airfryer-xxl-hd9650-90?utm_id=91g3i1&utm_source=partnerads&utm_medium=affiliate&utm_campaign=b2c-loc-partnerads-running&utm_content=all'],
    ['Greenpan Premier stegepande 30cm', 'https://www.imerco.dk/greenpan-premiere-stegepande?id=100405349'],
    ['Greenpan Premier stegepande 24cm', 'https://www.imerco.dk/greenpan-premiere-stegepande?id=100405347'],
    ['Greenpan Premier Wok', 'https://www.imerco.dk/greenpan-premiere-wok?id=100405351'],
    ['Scanpan bradepande 5 liter', 'https://www.kop-kande.dk/scanpan-classic-bradepande-5-ltr-39x27-cm-083421353214'],
    ['Dyson V11', 'https://www.elgiganten.dk/product/husholdning/stovsuger-og-rengoring/179558/dyson-v11-2020-torque-drive-extra-ledningslos-stovsuger'],
    ['WMF Steak Bestiksæt - 12 dele', 'https://www.imerco.dk/wmf-steak-bestiksaet-12-dele?id=100023195'],
    ['Kenwood Chef XL KVL4100S', 'https://www.elgiganten.dk/product/husholdning/kokkenudstyr/kokkenmaskiner/KVL4100S/kenwood-chef-xl-kokkenmaskine-kvl4100s-solv-tank-testvinder?utm_id=91g3i1&utm_source=partnerads&utm_medium=affiliate&utm_campaign=b2c-loc-partnerads-running&utm_content=all'],
    ['Gavekort til wellness ophold', ''],
    ['Gavekort til gourmetophold', ''],
    ['Gavekort til slotsophold', ''],
    ['Træningsbænk - skrå - 300 kg', 'https://shop.getbig.dk/semi-pro-skraabaenk-ms-l101'],
    ['Gavekort til træningsudstyr ved LC Gear', ''],
    ['Gavekort til træningsudstyr ved Rogue Europe', '']
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
        //console.log(`setting justify: ${jus}`);
        return jus;
    }

    const getBottom = () => {
        if(fullHeight) {
            return getWishlist();
        } else {
            return (
            <div style={{width: '100%'}}>
                <center>{contactText.get(getLanguage)}</center>
                <center><a onClick={(e) => e.stopPropagation()} href = 'mailto: gaver@buiholmgaard.dk'>Send Email</a></center>
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
                    {getBottom()}
                </Grid>            
            </Grid>
    )
}

export default Wishlist;