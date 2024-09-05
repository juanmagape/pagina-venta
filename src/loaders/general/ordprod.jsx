import React from 'react'
import '../../css/styles.css'
import Addtocart from './addtocart.jsx'

function Ordprod() {
  return (
    <div className='container'> 
      <div>
        <h3 className='separTop mb-5'>Descubre nuestros ordenadores</h3>
      </div>
        <div className='row g-4 justify-content-center separarBot'>
        {produData.map((pd) => (
          <div key={pd.name} className="col-md-4 col-sm-6 border-0 bg-transparent"> 
            <div className="card"> 
              <div className="d-flex justify-content-center align-items-center p-3 wfotov"> 
                <img src={pd.img} className="img-fluid w-50" alt={pd.name} />
              </div>
              <div className="card-body text-center"> 
                <p className="card-title">{pd.name}</p>
                <p className="card-text">{pd.price + "€"}</p>    

                <Addtocart product={pd}/>
                
              </div> 
            </div>
          </div>
        ))}
    </div>
    </div>
    
  )
}

const produData = [
    {
        img: "/img/imgventa/ordenadores/portatil1.png",
        name: "Asus Rog Zephyrus G14",
        price: "799"
    },
    {
        img: "/img/imgventa/ordenadores/portatil2.png",
        name: "Lenovo Thinkpad X1",
        price: "1000"
    },
    {
        img: "/img/imgventa/ordenadores/pcsobre1.png",
        name: "HP Sobre mesa",
        price: "1400"
    },
    {
      img: "/img/imgventa/ordenadores/pcsobre2.png",
      name: "HP Victus Sobremesa",
      price: "1400"
    },
    {
      img: "/img/imgventa/ordenadores/portatil3.png",
      name: "HP Victus 16",
      price: "1400"
    },
    {
      img: "/img/imgventa/ordenadores/pcsobre3.png",
      name: "MSI Aegis",
      price: "1400"
    },
    
]

export default Ordprod