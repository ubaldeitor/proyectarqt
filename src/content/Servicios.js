import React from 'react';
import {Grid, Paper} from '@material-ui/core';

const Servicios = () =>{
    return(
        <Grid container>
            <Grid item sm={12}>
                <Paper>
                    <div>
                        <h1>Servicios</h1>
                        <p>A menudo la gente tiene en mente que el diseño de espacios es algo tan fácil que no es necesario contar
                        con un arquitecto. Esta y otra serie de creencias erroneas dan como resultado casas que no son óptimas, 
                        que no aprovechan bien sus espacios, sin ventilación o simplemente casas donde no caben las personas.</p>
                        <p>Por otro lado se tiene la idea de que la ayuda de un arquitecto incrementará mucho el costo de la vivienda,
                        sin embargo, a la larga es más costoso demoler y reconstruir cuando el diseño estuvo mal ejecutado.</p>
                        <p>Por tal motivo entre los servicios que brindo se encuentra el de diseño de proyectos y planos, con una relación
                        costo beneficio que te sorprendera. Creo que la arquitectura debe estar al alcance de cualquiera, así que ponte
                        en contacto y seguro podremos adaptar una solución para tu presupuesto.</p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Servicios;