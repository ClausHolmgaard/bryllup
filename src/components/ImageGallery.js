import React, {useEffect, useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { useMediaQuery } from "@material-ui/core";

const carouselStyle = {
    height: '100%',
    width: '100%',
    //maxHeight: '100%',
};

const ImageGallery = ({imageUrl}) => {
    const [imageGroups, setImageGroups] = useState([]);
    const [imagesPerPage, setImagesPerPage] = useState(2)

    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("xs"));
    //const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        setImagesPerPage(isSmallScreen ? 2 : 4);
        getImages();
        //console.log(imageUrls);
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const getImages = () => {
        console.log(`Getting image list from: ${imageUrl}`);
        fetch(`${imageUrl}`, {
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        },)
            .then(data => data.json())
            .then(json => setAndGroupImageUrls(json))
            .catch(err => console.log(`Error getting image list ${err}`))
    }

    const setAndGroupImageUrls = (json) => {
        //setImageUrls(json);

        //console.log(json);
        const images = json['images'];
        //console.log(`number of images: ${images.length}`);

        const numGroups = Math.ceil(images.length / imagesPerPage);
        //console.log(`Number of groups: ${numGroups}`);
        console.log(`is small screen: ${isSmallScreen}`);
        const imGroups = Array.from({length: numGroups}, (x, i) => getImageGroup(images, imagesPerPage, imagesPerPage*i));
        //console.log(imGroups);
        setImageGroups(imGroups);
    }

    const getImageGroup = (images, number, offset) => {
        return Array.from({length: number}, (x, i) => images[(i + offset) % images.length]);
    }

    const CarouselItem = (props) => {
        return (
            <Grid container style={{height: '50vh', width: '100%'}} direction='row' alignItems='center' justify='center' spacing={1}>
                {props.images.map((l, i) => (
                    <Grid item key={i}>
                        <Paper elevation={0}>
                            <img src={l} alt='' referrerPolicy="no-referrer" style={{maxHeight: '45vh', maxWidth: `${100/imagesPerPage - 10}vw`}} />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        )
    }

    return (
            <Grid container item xs={12} direction='row' justify='center' alignItems='stretch'>
                <Grid item>
                    <Typography variant='h3'>
                        <center>
                            Galleri
                        </center>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Carousel
                        style={carouselStyle}
                        indicators={false}
                        interval={10000}
                        next={ () => { /*increaseOffset()*/ } }
                        prev={ () => {/* Do other stuff */} }>

                        {imageGroups.map((im, i) => <CarouselItem images={im} key={i}/>)}

                    </Carousel>
                </Grid>
            </Grid>
            
    )
}

export default ImageGallery;