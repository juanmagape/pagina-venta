import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import {Fade} from 'react-slideshow-image'
import bannerOne from '../img/banner1.png'
import bannerTwo from '../img/banner2.png'
import bannerThree from '../img/banner3.png'
import '../css/styles.css'


function Slider() {

    const slideImages = [
        {
            url: bannerOne
        },
        {
            url: bannerTwo
        },
        {
            url: bannerThree
        }
    ];

    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        backgroundSize: 'cover',
    }

    return (
    <div className='slide-container'>
        <Fade>
            {slideImages.map((image, index) => (
                <div key={index}>
                    <div style={{...divStyle, backgroundImage: `url(${image.url})` }}>

                    </div>
                </div>
            ))}
        </Fade>
    </div>
  )
}

export default Slider;