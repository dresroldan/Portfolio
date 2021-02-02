import React from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";
import Avatar from "../Avatar/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles((theme) => ({
  skillsContainer: {
    // padding: 90,
    paddingTop: "100px",
    paddingBottom: "150px",
    // border: "2px solid green",
    justifyContent: "center",
    // position:"relative"
    backgroundColor: "#F1F9F6",
    // opacity:"75%"
    fontFamily: "Fluro",
  },

  info: {
    // border: "2px solid red",
  },

  // badgeTwo: {

  //   width:"600px",
  //   height:"370px",
  //   position:"absolute",
  //   top: "100px",
  //   right:"0px",
  //   backgroundColor:"black",
  //   zIndex:1,
  //   borderRadius: "5px",
  //   opacity:"75%"
  //   }
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <div id="SKILLS-SECTION">
      <Grid container className={classes.skillsContainer}>
        <Grid item xs={6} md={7} className={classes.info}>
          <Typography component="h2" variant="h8">
            <Box fontWeight="fontWeightBold" textAlign="center" m={1}>
              Skill-Set
            </Box>
          </Typography>

          <Typography variant="h7" textAlign="center" >
            Node.Js. - Express - Javascript - jQuery - React - JSX - GIT -
            GitHub - MongoDB - MySQL - Mongoose - Handlebars - HTML5 - CSS3 -
            Bootstrap - Materialize - API’s - Heroku - Terminal - AJAX - Restful
            API - ES6 - React Hooks - JSON - Sequelize
          </Typography>
        </Grid>
        {/* <div id="#BADGE2" className={classes.badgeTwo}></div> */}
      </Grid>
    </div>
  );
}
