import React from "react";
import {
  Grid,
  Typography,
  Container,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import Fade from "react-reveal/Fade";
// import Fab from "@material-ui/core/Fab";
// import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(30, 0, 30),
    background:
      "-webkit-radial-gradient(circle, hsla(191, 60%, 89%, 1) 0%, hsla(56, 59%, 86%, 1) 50%, hsla(25, 85%, 69%, 1) 100%);",
    borderRadius: "20px",
  },
  heading: {
    paddingBottom: "10px",
  },
  icons: {
    paddingTop: "25px",
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Fade duration={2000} bottom cascade>
          <Typography
            className={classes.heading}
            variant="h5"
            align="center"
            color="primary"
          >
            Hello, I'm Andrés{" "}
          </Typography>
          {/* <Fade top cascade> */}
          <Typography variant="h4" align="center" color="primary" paragraph>
            I am a developer who focuses on building applications that improves
            lives through user experience.
          </Typography>
        </Fade>
        {/* </Fade> */}
        <div className={classes.links}>
          <Fade duration={2000} bottom cascade>
            <Grid container spacing={0} justify="center">
              <Grid item>
                <IconButton
                  aria-label="Linkedin.com"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/andresroldan23/")
                  }
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton
                  aria-label="Github.com"
                  onClick={() => window.open("https://github.com/dresroldan")}
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton
                  aria-label="Linkedin.com"
                  onClick={() =>
                    window.open("https://www.instagram.com/mar_de_luz_/")
                  }
                >
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </Fade>
        </div>

        {/* <Grid container spacing={0} justify="center">
          <Fab backgroundColor="#A80202">
            <KeyboardArrowDownIcon />
          </Fab>
        </Grid> */}
      </Container>
   
   
   
    </div>
  );
}
