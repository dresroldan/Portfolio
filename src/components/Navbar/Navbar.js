import React from "react";
import { AppBar,Toolbar, Typography, makeStyles ,Link} from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
  },
  projectsLink:  {marginRight: theme.spacing(2)}

}));


export default function Navbar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <AppBar className={classes.header} position="relative" >
      <Toolbar>
        <Typography variant="h6" noWrap className={classes.projectsLink} >
          <Link href="#applications" >
            Projects
          </Link>
        </Typography>
        <Typography variant="h6" noWrap>
          <Link href="#" onClick={preventDefault}>
            Resume
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
