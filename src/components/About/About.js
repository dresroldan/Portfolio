import React from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";
import Avatar from "../Avatar/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  aboutContent: {
    backgroundColor: "#EBE4D3",
  },

  aboutContainer: {
    padding: 70,
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutContent}>
      
      
      
      <Grid container className={classes.aboutContainer}>
        <Grid item xs={12} md={4}>
          <Avatar />
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h6">About Me</Typography>
          <Typography variant="h7" paragraph>
            Creative and dependable front-end web developer with an outstanding
            customer service record, and superb work ethic. Fast learner, hard
            worker, and team player who is proficient in an array of scripting
            languages and multimedia web tools.
          </Typography>

          <Typography variant="h6">Contact</Typography>
          <Typography variant="h6" className={classes.textPadding}>
            Andrés Roldán
          </Typography>

          <Typography variant="h6">Chicago, IL</Typography>
          <Typography variant="h6">779.207.8144</Typography>
          <Typography variant="h6">dresroldan@gmail.com</Typography>
        </Grid>
      </Grid>
   
   
   
   
   </div>
  );
}
