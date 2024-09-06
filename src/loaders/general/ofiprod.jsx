import React from 'react'
import AddTocart from './addtocart.jsx'

function Ofiprod() {
  return (
    <div className='container'> 
      <div>
        <h3 className='separTop mb-5'>Descubre nuestros productos de oficina</h3>
      </div>
        <div className='row g-4 justify-content-center separarBot'>
        {ofidata.map((od) => (
          <div key={od.name} className="col-md-4 col-sm-6 border-0 bg-transparent"> 
            <div className="card"> 
              <div className="d-flex justify-content-center align-items-center p-3 wfotov"> 
                <img src={od.img} className="img-fluid w-50" alt={od.name} />
              </div>
              <div className="card-body text-center"> 
                <p className="card-title">{od.name}</p>
                <p className="card-text">{od.price + "€"}</p>

                <AddTocart product={od}/>
                
              </div> 
            </div>
          </div>
        ))}
    </div>
    </div>
  )
}

const ofidata = [
    {
        img: '  /img/imgventa/oficina/raton1.webp',
        name: 'Raton Logitech Ergonomico',
        price: '44'
    },
    {
        img: '/img/imgventa/oficina/raton2.png',
        name: 'Raton Logitech MX',
        price: '39'
    },
    {
        img: '/img/imgventa/oficina/soporteport.png',
        name: 'Soporte para portatiles',
        price: '14'
    },
    {
      img: '/img/imgventa/oficina/tecladoergo.webp',
      name: 'Teclado ergonomico Logitech',
      price: '29.99'
    },
    {
      img: '/img/imgventa/oficina/monitor.webp',
      name: 'Monitor BenQ',
      price: '109'
    },
    {
      img: '/img/imgventa/oficina/monitorcurvohp.avif',
      name: 'Monitor Curvo HP',
      price: '230'
    },
]

export default Ofiprod