import React from 'react'

function Cards() {

    const newPages = [
        {id:'ordenaRed', urlPage:'../subpaginas/ordenadores.html'},
        {id:'gamingRed', urlPage:'../subpaginas/gaming.html'},
        {id:'officeRed', urlPage:'../subpaginas/oficina.html'},
        {id:'compoRed', urlPage:'../subpaginas/componentes.html'},
    ];

    React.useEffect(() => {
        newPages.forEach(newPage => {
            const pageElement = document.getElementById(newPage.id); 

            if (pageElement) {
                pageElement.addEventListener('click', () => {
                    window.location.href = newPage.urlPage;
                });
            }
        });
    });
        

  return (
    <div className='d-grid mb-5 mt-5'>
        <div className='row gap-4 justify-content-center'>
            <button className="card col-3 size" id='gamingRed'>
                <img src="" className="card-img-top" />
                <div className="card-body">
                </div>
            </button>

            <button className="card col-2 size" id='officeRed'>
                <img src="" className="card-img-top" />
                <div className="card-body">
                </div>
            </button>

            <button className="card col-2 size" id='ordenaRed'>
                <img src="" className="card-img-top" />
                <div className="card-body">
                </div>
            </button>

            <button className="card col-3 size" id='compoRed'>
                <img src="" className="card-img-top" />
                <div className="card-body">
                </div>
            </button>

      </div>
    </div>
  )
}

export default Cards;