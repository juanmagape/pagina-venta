import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../img/logo.png'
import '../css/styles.css'


function Navbar() {

    const newPages = [
        {id:'iniL', urlPage:'../../index.html'},
        {id:'gamL', urlPage:'../subpaginas/gaming.html'},
        {id:'ofiL', urlPage:'../subpaginas/oficina.html'},
        {id:'comL', urlPage:'../subpaginas/componentes.html'},
        {id:'ordL', urlPage:'../subpaginas/ordenadores.html'}
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
        <div>
            <nav>
                <ul className="d-flex list-unstyled border-bottom align-items-center">
                    <li className="ms-2 pe-3 border-end"><img className="imgLogo " src={Logo} alt="" /></li>
                    <ul className="d-flex list-unstyled gap-4">
                        <li><button className="p-3 ms-3 bg-white border-0 textHover" id="iniL">Inicio</button></li>
                        <li><button className="p-3 bg-white border-0 textHover" id="gamL">Gaming</button></li>
                        <li><button className="p-3 bg-white border-0 textHover" id="ofiL">Oficina</button></li>
                        <li><button className="p-3 bg-white border-0 textHover" id="ordL">Ordenadores</button></li>
                        <li><button className="p-3 bg-white border-0 textHover" id="comL">Componentes</button></li>
                    </ul>

                </ul>
            </nav>
        </div>
    );
}

export default Navbar;