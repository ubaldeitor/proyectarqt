import React from "react";
import { Typography, Button, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar:{
      backgroundColor: '#ffffff',
      color: theme.palette.primary.dark
    }
  }));

const Header =  () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6" color="#3f51b5">ArquiProyect</Typography>
                <Button color="inherit">Inicio</Button>
                <Button color="inherit">Servicios</Button>
                <Button color="inherit">Portafolio</Button>
                <Button color="inherit">Contacto</Button>
                <Button color="inherit">Blog</Button>
            </Toolbar>
          </AppBar>
          </div>
    );
}

export default Header;