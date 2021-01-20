import React from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";
import Avatar from "../Avatar/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  aboutContent: {
    // backgroundColor: "rgb(175, 192, 175)",
    justifyContent: "center",
    border: "1px solid",
    borderRadius: "20px",
    marginTop: "20px",
  },

  aboutContainer: {
    padding: 70,
  },

  avatar: {
    justifyContent: "center",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutContent}>
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} md={5}>
          <Avatar className={classes.avatar} />
        </Grid>

        <Grid item xs={12} md={7}>
          <Typography component="h2" variant="h6" gutterBottom>
            About Me
          </Typography>
          <Typography variant="h7" paragraph>
            Creative and dependable front-end web developer with an outstanding
            customer service record, and superb work ethic. Fast learner, hard
            worker, and team player who is proficient in an array of scripting
            languages and multimedia web tools.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>

          <Box>
            <Typography variant="h7" gutterBottom>
              Andrés Roldán
            </Typography>
            <Typography variant="h7" gutterBottom>
              Chicago, IL
            </Typography>
            <Typography variant="h7" gutterBottom>
              779.207.8144
            </Typography>
            <Typography variant="h7" gutterBottom>
              dresroldan@gmail.com
            </Typography>

            <a
              href="https://drive.google.com/file/d/1uWGIeu_o2xWPSQHOJcNfhrtt3uzjUwqm/view"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.textPadding}
            >
              <Button size="large" variant="contained">
                Resume
              </Button>
            </a>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
