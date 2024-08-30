import React from 'react'

function Footer() {

  const socials = [
    {id:'twR', socialURL:'https://twitter.com'},
    {id:'insR', socialURL:'https://instagram.com'},
    {id:'faceR', socialURL:'https://facebook.com'}
  ];

  React.useEffect(() => {
    socials.forEach(socNew => {
      const socElement = document.getElementById(socNew.id);

      if (socElement) {
        socElement.addEventListener('click', () => {
          window.location.href = socNew.socialURL;
        });
      }
    });
  });

  return (
    <div className='border-top'>
        <footer className='d-grid'>
            <div className="container text-center">
                    <div className="row pt-5">

                        <div className="col-4">
                          <h6 className='fw-bold border-bottom pb-2'>Redes</h6>
                          <p className='pt-1 textHover' id='twR'>Twitter</p>
                          <p className='textHover' id='insR'>Instagram</p>
                          <p className='textHover' id='faceR'>Facebook</p>
                        </div>
                        <div className="col-4">
                          <h6 className='fw-bold border-bottom pb-2'>Contactar</h6>
                          <p className='pt-1 textHover'>Contacto y Ayuda</p>
                          <p className='textHover'>Devoluciones y garantias</p>
                          <p className='textHover'>Trabaja con nosotros</p>
                        </div>
                        <div className="col-4">
                          <h6 className='fw-bold border-bottom pb-2'>Quienes somos</h6>
                          <p className='pt-1 textHover'>Quienes somos</p>
                          <p className='textHover'>Condiciones de compra</p>
                          <p className='textHover'>Aviso Legal</p>
                          <p className='textHover'>Privacidad</p>
                          <p className='textHover'>Afiliados</p>
                        </div>
                    </div>
            </div>

        </footer>
    </div>
  )
}

export default Footer;