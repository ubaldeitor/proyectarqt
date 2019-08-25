import React from "react";
import { Grid, Paper } from "@material-ui/core";

const Contacto = () => {
  return (
    <Grid container>
      <Grid item sm={6}>
        <Paper>
          <div>
            <h1>Cuéntanos de tu proyecto arquitectónico</h1>
            <p>LLena los siguentes datos:</p>
            <div>
              <form>
                <label>
                  Nombre:
                  <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" />
                </label>
                <label>
                    Teléfono opcional:
                    <input type="text" name="phone" />
                </label>
                <label>
                    Describe tu proyecto:
                    <input type="text" name="description" />
                </label>
                <input type="submit" value="Enviar" />
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
