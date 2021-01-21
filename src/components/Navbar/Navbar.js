import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "transparent",
    color: "black",
    boxShadow: "0px 0px 0px 0px",
    marginTop: "5vh",
  },
  projectsLink: {
    marginRight: theme.spacing(2),

    cursor: "pointer",
  },

  toolbar: {
    justifyContent: "space-between",
  },

  links: {
    display: "flex",
    cursor: "pointer",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <AppBar className={classes.header} position="relative">
      <Toolbar className={classes.toolbar}>
        <Box>
          <Typography variant="h6" noWrap className={classes.projectsLink}>
            <Link
              activeClass="active"
              to="applications"
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </Typography>
        </Box>

        <Box className={classes.links}>
          <Typography variant="h7" noWrap className={classes.projectsLink}>
            <Link activeClass="active" to="about"  smooth={true} duration={1000}>About</Link>
          </Typography>

          <Typography variant="h7" noWrap>
            <Link activeClass="active" to="about"  smooth={true} duration={1000}>Contact</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
