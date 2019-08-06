import React from 'react';
import {Grid, Paper} from '@material-ui/core';

const Portafolio = ()=>{
    return(
        <Grid container>
            <Grid item sm={12}>
                <Paper>
                    <div>
                        <h1>Algunos de mis proyectos</h1>
                        <p>Estos son algunas de las casa que he ayudado a diseñar:</p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Portafolio;