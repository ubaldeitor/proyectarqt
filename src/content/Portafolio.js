import React from 'react';
import {Grid, Paper} from '@material-ui/core';

const Portafolio = ()=>{
    return(
        <Grid container>
            <Grid item sm={12}>
                <Paper>
                    <div>
                        <h1>Portafolios.</h1>
                        <p>Estos son algunas de los proyectos que ArquiProyect ha ayudado a diseñar:</p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Portafolio;