import React from "react";
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: theme.palette.grey[100]
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const Contacto = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "Client Name",
    email:"correo@micorreo.com",
    description:"Descripcion proyecto"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Grid container>
      <Grid item sm={6}>
        <Paper className={classes.paper}>
          <div>
            <h1>Cuéntanos de tu proyecto arquitectónico</h1>
            <p>LLena los siguentes datos:</p>
            <div>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="nombre-cliente"
                  label="Nombre"
                  className={classes.textField}
                  value={values.name}
                  onChange={handleChange("name")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="email-cliente"
                  label="Correo Electrónico"
                  className={classes.textField}
                  value={values.email}
                  onChange={handleChange("email")}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="descripcion"
                  label="Descripción Proyecto"
                  className={classes.textField}
                  value={values.description}
                  onChange={handleChange("description")}
                  margin="normal"
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Enviar
                </Button>
              </form>
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
};

export default Contacto;
