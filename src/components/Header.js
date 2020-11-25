import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
header: {
backgroundColor: "transparent",
color: "black",
boxShadow: "0px 0px 0px 0px",

}


}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.header} position="relative">
      <Toolbar>

  
        <Typography variant="h6"  noWrap>
          Andres Roldan
        </Typography>

      </Toolbar>
    </AppBar>
  );
}