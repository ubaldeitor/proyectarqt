import React from "react";
import {Paper, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    backgroundColor: theme.palette.primary.dark
  },
  footer: {
    backgroundColor: theme.palette.primary.dark
  },
  title:{
    color: 'white'
  },
  paragraph:{
    color: '#F5E3FD'
  }

}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item sm={12}>
        <Paper className={classes.paper}>
          <div className={classes.footer}>
          <h1 className={classes.title}>Síguenos en nuestras redes sociales:</h1>
            <ul className={classes.paragraph}>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>Google+</li>
            </ul>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Footer;