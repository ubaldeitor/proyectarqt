import React from 'react';
import {Grid, Paper} from '@material-ui/core';

const Contacto = () => {
    return(
        <Grid container>
            <Grid item sm={6}>
                <Paper>
                    <div>
                        <h1>Cuéntanos de tu proyecto arquitectónico</h1>
                        <p>LLena los siguentes datos:</p>
                        <div>
                            <label>Nombre:</label>
                            <label>Email:</label>
                            <label>Teléfono de contacto:</label>
                            <label>Descripción del proyecto:</label>
                            <button>Enviar</button>
                        </div>
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