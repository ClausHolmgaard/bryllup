import React, {useEffect, useState, useRef} from 'react';
import Carousel from 'react-material-ui-carousel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//const imageUrl = 'http://localhost:5000/images';
const imageUrl = 'https://bryllup-test.herokuapp.com/images'

const IMAGES_PER_PAGE = 4;

const style = {
    height: '100%',
    width: '100%',
    backgroundColor: '#bdf2ff'
};

const carouselStyle = {
    height: '100%',
    width: '100%'
    //maxHeight: '100%'
};

const imStyle = {
    height: 'auto',
    maxHeight: '100%',
    //width: 'auto',
    maxWidth: '20vw',
    //height: 'auto'
};

const ImageGalley = () => {
    //const [imageUrls, setImageUrls] = useState([])
    const [imageOffset, setImageOffset] = useState(0);
    //const imageOffset = useRef(0);
    const [imageGroups, setImageGroups] = useState([]);

    useEffect(() => {
        getImages();
        //console.log(imageUrls);
    }, [])

    const getImages = () => {
        fetch(`${imageUrl}`)
            .then(data => data.json())
            .then(json => setAndGroupImageUrls(json))
            .catch(err => console.log(`Error getting image list ${err}`))
    }

    const setAndGroupImageUrls = (json) => {
        //setImageUrls(json);

        console.log(json);
        const images = json['images'];
        console.log(`number of images: ${images.length}`);

        const numGroups = Math.ceil(images.length / IMAGES_PER_PAGE);
        console.log(`Number of groups: ${numGroups}`);

        const imGroups = Array.from({length: numGroups}, (x, i) => getImageGroup(images, IMAGES_PER_PAGE, IMAGES_PER_PAGE*i));
        console.log(imGroups);
        setImageGroups(imGroups);
    }

    const getImageGroup = (images, number, offset) => {
        return Array.from({length: number}, (x, i) => images[(i + offset) % images.length]);
    }

    const CarouselItem = (props) => {
        return (
            <Grid container style={{height: '100%', width: '100%'}} direction='row' alignItems='center' justify='center' spacing={1}>
                {props.images.map((l, i) => (
                    <Grid item key={i}>
                        <Paper style={imStyle} elevation={0}>
                            <img src={l} alt='' style={imStyle} />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        )
    }

    return (
        <Carousel 
            style={carouselStyle}
            next={ () => { /*increaseOffset()*/ } }
            prev={ () => {/* Do other stuff */} }>

            {imageGroups.map((im, i) => <CarouselItem images={im} key={i}/>)}

        </Carousel>
    )
}

export default ImageGalley;