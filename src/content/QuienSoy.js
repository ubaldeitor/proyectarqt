import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const QuienSoy = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={6}>
          <Paper className={classes.paper}>Panel Izq</Paper>
        </Grid>
        <Grid item sm={6}>
          <Paper className={classes.paper}>
            <div>
              <h1>¿Quien soy?</h1>
              <p>
                Mi nombre es Lenia Godínez, soy arquitecta egresada por la UNAM.
                Me encanta el diseño de espacios y el dibujo. Disfruto ayudar a
                las personas a optimizar los espacios porque se, que una casa
                bien planeada será un espacio donde el amor florecerá.
              </p>
              <p>
                Amo pasar el tiempo dibujando, leyendo y jugando con mis hijos.
              </p>
              <p>
                Si tienes en mente un proyecto, déjame ayudarte a que esa idea
                se convierta en realidad.
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuienSoy;
