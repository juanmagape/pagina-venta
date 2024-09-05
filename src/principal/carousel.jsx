import React, { useDebugValue } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/styles.css';


function Carousels() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="container mb-5 mt-5">
        <div className="mb-5 separTop">
          <h4>Productos escogidos por nuestros profesionales</h4>
        </div>
      <div className="row g-4 justify-content-center"> 
      <Slider {...settings}>
        {data1.map((d) => (
          
          <div key={d.name} className="col-md-4 col-sm-6"> 
            <div className="card border"> 
              <div className="d-flex justify-content-center align-items-center p-3"> 
                <img src={d.img} className="img-fluid w-50" alt={d.name} />
              </div>
              <div className="card-body text-center"> 
                <p className="card-title">{d.name + " " + d.compo}</p>
                <p className="card-text">{d.price + "€"}</p>    
              </div> 
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}

const data1 = [
    {
        img: '/img/carousel/portatil1.png',
        name: 'Asus Rog Strix',
        compo: 'RTX 4060 8GB 32 GB RAM 1TB',
        price: '799',
    },
    {
        img: '/img/carousel/portatil1.png',
        name: 'Asus Rog Strix2',
        price: '799',
    },
    {
        img: '/img/carousel/portatil1.png',
        name: 'Asus Rog Strix3',
        price: '799',
    },
    {
        img: '/img/carousel/portatil1.png',
        name: 'Asus Rog Strix4',
        price: '799',
    },
]

export default Carousels;