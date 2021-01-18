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

const useStyles = makeStyles((theme) => ({
  heroContent: {
    // height:1000
    padding: theme.spacing(25, 0, 50),
    backgroundColor: "#FFFBF3",
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
        <Fade top cascade>
          <Typography
            className={classes.heading}
            variant="h5"
            align="center"
            color="primary"
          >
            Hello, I'm Andrés{" "}
          </Typography>
        </Fade>
        {/* <Fade top cascade> */}
        <Typography variant="h4" align="center" color="primary" paragraph>
          I am a developer with a focus in applications that improve the lives
          of others through user experience.
        </Typography>
        {/* </Fade> */}
        <div className={classes.links}>
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
        </div>
      </Container>
    </div>
  );
}
