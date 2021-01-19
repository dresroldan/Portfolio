import React from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";
import Avatar from "../Avatar/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  aboutContent: {
    // backgroundColor: "black",
  },

  skillsContainer: {
    padding: 90,
  },
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.aboutContent}>
      <Grid container className={classes.skillsContainer}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" align="center">Skill-Set</Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h7">
            Node.Js. - Express - Javascript - jQuery - React - JSX - GIT -
            GitHub - MongoDB - MySQL - Mongoose - Handlebars - HTML5 - CSS3 -
            Bootstrap - Materialize - API’s - Heroku - Terminal - AJAX - Restful
            API - ES6 - React Hooks - JSON - Sequelize
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
