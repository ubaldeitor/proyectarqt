import React, {Fragment} from "react";
import QuienSoy from '../content/QuienSoy';
import Servicios from '../content/Servicios';
import Footer from '../footer/Footer';
import Portafolio from '../content/Portafolio';
import Contacto from '../content/Contacto';

const FrontPage = ()=>{
    return(
        <Fragment>
            <QuienSoy />
            <Servicios />
            <Portafolio />
            <Contacto />
            <Footer />
        </Fragment>
    );
}

export default FrontPage;