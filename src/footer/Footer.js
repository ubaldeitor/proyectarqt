import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiPinterest, mdiGooglePlus } from '@mdi/js';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Facebook" icon={<mdiFacebook />} />
      <BottomNavigationAction label="Twitter" icon={<mdiTwitter />} />
      <BottomNavigationAction label="Instagram" icon={<mdiInstagram />} />
      <BottomNavigationAction label="Pinterest" icon={<mdiPinterest />} />
      <BottomNavigationAction label="Google +" icon={<mdiGooglePlus />} />
    </BottomNavigation>
  );
};

export default Footer;