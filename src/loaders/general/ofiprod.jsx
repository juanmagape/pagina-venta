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
        img: '',
        name: 'Oficina1',
        price: ''
    },
    {
        img: '',
        name: 'Oficina2',
        price: '400'
    },
    {
        img: '',
        name: 'Oficina3',
        price: ''
    },
]

export default Ofiprod