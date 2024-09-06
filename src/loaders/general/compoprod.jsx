import React from 'react'
import AddTocart from './addtocart.jsx'

function Compoprod() {
  return (
    <div className='container'> 
      <div>
        <h3 className='separTop mb-5'>Descubre nuestros componentes</h3>
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
        img: '  /img/imgventa/componentes/tarjgraf1.avif',
        name: 'Nvidia 4080',
        price: '440'
    },
    {
        img: '/img/imgventa/componentes/tarjgraf2.png   ',
        name: 'Nvidia 3090',
        price: '399'
    },
    {
        img: '/img/imgventa/componentes/ssd.png',
        name: 'SSD 1TB Samsung',
        price: '140'
    },
    {
      img: '/img/imgventa/componentes/ssdnvme.avif',
      name: 'SSD 1TB Samsung NVMe 2.0',
      price: '109'
    },
    {
        img: '/img/imgventa/componentes/nzxtvent.avif',
        name: 'Ventiladores NZXT',
        price: '29.99'
    },
    {
      img: '/img/imgventa/componentes/disipador.png',
      name: 'Disipador Mars Gaming',
      price: '23'
    },
]

export default Compoprod