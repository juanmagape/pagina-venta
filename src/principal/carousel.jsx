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

  function butRedi(url) {
    window.location.href = url;
  }

  return (
    <div className="container mb-5 mt-5">
        <div className="mb-5 separTop">
          <h4>Productos escogidos por nuestros profesionales</h4>
        </div>
      <div className="row g-4 justify-content-center"> 
      <Slider {...settings}>
        {data1.map((d) => (
          
          <button key={d.name} onClick={() => butRedi(d.url)} className="col-md-4 col-sm-6 border-0 bg-transparent"> 
            <div className="card border carfoto"> 
              <div className="d-flex justify-content-center align-items-center p-3"> 
                <img src={d.img} className="img-fluid w-50" alt={d.name} />
              </div>
              <div className="card-body text-center"> 
                <p className="card-title">{d.name}</p>
                <p className="card-text">{d.price + "€"}</p>    
              </div> 
            </div>
          </button>
        ))}
        </Slider>
      </div>
    </div>
  )
}

const data1 = [
    {
        img: '/img/imgventa/gaming/raton1.png',
        name: 'Ratón Krom',
        price: '44',
        url: '../subpaginas/gaming.html'
    },
    {
        img: '/img/imgventa/gaming/teclado1.png',
        name: 'Teclado Mars Gaming 60%',
        price: '18',
        url: '../subpaginas/gaming.html'
    },
    {
        img: '/img/imgventa/componentes/tarjgraf2.png',
        name: 'Nvidia RTX 3080',
        price: '399',
        url: '../subpaginas/componentes.html'
    },
    {
        img: '/img/imgventa/ordenadores/portatil1.png',
        name: 'Asus Rog Zephyrus G14',
        price: '799',
        url: '../subpaginas/ordenadores.html'
    },
    {
      img: '/img/imgventa/componentes/disipador.png',
      name: 'Disipador Mars Gaming',
      price: '23',
      url: '../subpaginas/componentes.html'
  },
  {
    img: '/img/imgventa/oficina/tecladoergo.webp',
    name: 'Teclado Ergonomico Logitech',
    price: '29.99',
    url: '../subpaginas/oficina.html'
},
]

export default Carousels;