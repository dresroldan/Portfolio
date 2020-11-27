import React from "react";
import { Grid, Typography, Container, makeStyles, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import palmImage from "../../images/projects/palm.jpg"

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(18, 0, 15),
    backgroundImage: palmImage
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Typography variant="h5" align="center" color="primary" paragraph>
          Hello, my name is Andrés Roldán. I am a web developer with a
          background in music production and an for design. Recent certificate
          in full stack development from Northwestern University in Chicago, IL
          with acquired skills in HTML, CSS, Javascript, React.js and responsive
          web design. My focus is to create applications that improve the lives
          of others through user experience.
        </Typography>

        <div >
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
                onClick={() => window.open("https://www.Linkedin.com")}
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
