import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  title: {
    color: theme.palette.text.primary
  },
  paragraph:{
    color: theme.palette.text.primary
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
              <h1 className={classes.title}>¿Qué es ArquiProyect?</h1>
              <p className={classes.paragraph}><b>ArquiProyect</b> es arquitectura al alcance de todos. Contar con un arquitecto desde el inicio del proyeco 
              de construcción significa: contar con <b>planos y guías</b> acordes con normas y mejores prácticas, más plusvalia
              para tu vivienda, más oportunidades de modificaciones o ampliaciones para tu casa al contar con planos 
              y guías de construcción adecauadas y la capacidad de hacer un presupuesto más acertado pues, al contar con
              tus planos, podrás hacer una estimación mejor de materiales y trabajadores. 

              En <b>ArquiProyect</b> tus planos y tu proyecto constructivo ¡Va!. 
              </p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default QuienSoy;
