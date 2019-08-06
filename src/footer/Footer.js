import React from "react";
import {Paper, Grid} from "@material-ui/core";
const Footer = () => {
  return (
    <Grid container>
      <Grid item sm={12}>
        <Paper>
          <div>Dejame ayudarte contáctame o sígueme en mis redes sociales:
            <ul>
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