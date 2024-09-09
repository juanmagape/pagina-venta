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
    <div className="container  mt-5 separarBot">
      <div className=' mb-5 separTop'>
          <h4>Lo último en tecnologia</h4>
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
        img: '/img/imgventa/componentes/ssdnvme.avif',
        name: 'SSD NVME Samsung 1TB',
        price: '109',
        url: '../subpaginas/componentes.html'
    },
    {
        img: '/img/imgventa/oficina/monitor.webp',
        name: 'Monitor BenQ',
        price: '109',
        url: '../subpaginas/oficina.html'
    },
    {
        img: '/img/imgventa/ordenadores/pcsobre2.png',
        name: 'PC Sobre Mesa HP Victus',
        price: '1400',
        url: '../subpaginas/ordenadores.html'
    },
    {
        img: '/img/imgventa/gaming/cascos1.png',
        name: 'HyperX Cloud II',
        price: '140',
        url: '../subpaginas/gaming.html'
    },
    {
      img: '/img/imgventa/oficina/monitorcurvohp.avif',
      name: 'Monitor Curvo HP',
      price: '230',
      url: '../subpaginas/oficina.html'
  },
  {
    img: '/img/imgventa/componentes/tarjgraf2.png',
    name: 'Nvidia 4080',
    price: '440',
    url: '../subpaginas/componentes.html'
},
]

export default Carousels;