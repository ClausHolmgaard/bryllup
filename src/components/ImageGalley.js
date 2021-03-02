import React, {useEffect, useState} from 'react';
import { Paper, Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

const style = {
    height: '100%',
    width: '100%',
    backgroundColor: '#bdf2ff'
};

const items = [{
        name: "Random Name #1",
        description: "Probably the most random thing you have ever seen!"
    },
    {
        name: "Random Name #2",
        description: "Hello World!"
    }
]

const importAll = (r) => {
    return r.keys().map(r);
}

const getImages = (listIms) => {

    listIms.map( (image, index) => console.log(image) );
    return(
        //listIms.map( (i) => <div key={i}><center>An Image</center><br/></div> )
        
        listIms.map( (image, index) => <div key={index}><center>test</center></div>)
    )
}


const ImageGalley = () => {

    const [listOfImages, setListOfImages] = useState([]);

    useEffect(() => {
        //listOfImages = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
        setListOfImages(importAll(require.context('.', false, /\.(png|jpe?g|svg)$/)));
        //listOfImages.map((i) => console.log(i));
    }, [])


    return (
        <div style={style}>
            <Carousel>
                {getImages(listOfImages)}
            </Carousel>
            <div>
                <img src={listOfImages[1]}></img>
            </div>
        </div>
    )
}

export default ImageGalley;