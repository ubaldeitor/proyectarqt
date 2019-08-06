import React from 'react';
import {Grid, Paper} from '@material-ui/core';

const Contacto = () => {
    return(
        <Grid container>
            <Grid item sm={6}>
                <Paper>
                    <div>
                        <h1>Cuéntame de tu proyecto</h1>
                        <p>LLena los siguentes datos:</p>
                    </div>
                </Paper>
            </Grid>
            <Grid item sm={6}>
                <Paper>
                    <div>
                        <p>Ilustración de contacto...</p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Contacto; 