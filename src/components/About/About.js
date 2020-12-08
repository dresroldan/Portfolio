import React from "react";
import { Typography, Container, makeStyles,  } from "@material-ui/core";
import Avatar from "../avatar/Avatar.js";
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  aboutContent: {


    backgroundColor: "black",
    color: "white",
  },

  aboutText: {
    color: "white",
  },
  textPadding: {
    paddingTop: 25,
  },
}));


 
  
export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutContent}>
      <Container maxWidth="md">
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="flex-start"
          m={1}
          p={1}
        >
          <Box p={1}>
            <Avatar />

            <Typography variant="h6" className={classes.textPadding}>
              Andrés Roldán
            </Typography>

            <Typography variant="h6" >
              Chicago, IL
            </Typography>
            <Typography variant="h6" >
              779.207.8144
            </Typography>
            <Typography variant="h6" >
              dresroldan@gmail.com
            </Typography>
          </Box>
        </Box>

        <Box  display="flex"
          flexWrap="wrap"
          justifyContent="flex-end"
          m={1}
          p={1}>
          <Box p={1}>
            <Typography
              variant="h6"
              color="white"
              paragraph
              
            >
              Creative and dependable front-end web developer with an
              outstanding customer service record, and superb work ethic. Fast
              learner, hard worker, and team player who is proficient in an
              array of scripting languages and multimedia web tools.
            </Typography>

            <a
              href="https://drive.google.com/file/d/1uWGIeu_o2xWPSQHOJcNfhrtt3uzjUwqm/view"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.textPadding}
            >
              <Button size="large" variant="contained"  >
                Resume
              </Button>
            </a>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
