import React from 'react'


function Carousels() {
  return (
    <div className="container mb-5">
      <div className="row g-4 justify-content-center"> 
        {data1.map((d) => (
          <div key={d.name} className="col-md-4 col-sm-6"> 
            <div className="card border"> 
              <div className="d-flex justify-content-center align-items-center p-3"> 
                <img src={d.img} className="img-fluid w-50" alt={d.name} />
              </div>
              <div className="card-body text-center"> 
                <p className="card-title">{d.name}</p>
                <p className="card-text">{d.price}</p>    
              </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const data1 = [
    {
        img: '/img/carousel/portatil1.png',
        name: 'Asus Rog Strix',
        price: '799€',
    },
    {
        img: '/img/carousel/portatil1.png',
        name: 'Asus Rog Strix2',
        price: '799€',
    },
    {
        img: '/img/carousel/portatil1.png',
        name: 'Asus Rog Strix3',
        price: '799€',
    },
]

export default Carousels;