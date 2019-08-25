import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: theme.palette.grey[100]
      }
}));

const Servicios = () =>{
    const classes = useStyles();
    return(
        <Grid container>
            <Grid item sm={12}>
                <Paper className={classes.paper}>
                    <div>
                        <h1>Servicios</h1>
                        <p>Dentro de los servicios que podemos ejecutar están: volumetría, análisis de áreas, distribución
                        de plantas arquitectónicas, desarrollo final de plantas arquitectónicas, fachada y cortes arquitectónicos
                        Memoria del proyecto en archivos digitales.</p>
                        <p>Tenemos <b>paquetes</b> desde <b>$3,500 pesos</b>. Llama ahora y platícanos de tu proyecto arquitectónico.</p>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Servicios;