import React from "react";
import { Grid, Typography, Container, makeStyles,  } from "@material-ui/core";
import Avatar from "../avatar/Avatar.js";

const useStyles = makeStyles((theme) => ({
  aboutContent: {
    padding: theme.spacing(12,0 , 12),
    backgroundColor:"black",
    color:"white"
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutContent} >
      <Container maxWidth="sm"  >
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={6}>
            <Avatar />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Typography align="center" color="secondary" paragraph>
              Creative and dependable front-end web developer with an
              outstanding customer service record, and superb work ethic. Fast
              learner, hard worker, and team player who is proficient in an
              array of scripting languages and multimedia web tools.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
