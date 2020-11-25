import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ImageAvatar from './Avatar';

const theme2 = createMuiTheme({
  typography: {
    fontFamily: [
      'PT Serif',
      'Serif',
    ].join(','),
  },});

const useStyles = makeStyles((theme) => ({
  aboutContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

}));

export default function About() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme2}>
    <div className={classes.aboutContent}>
      <Container maxWidth="sm">
        <Typography>
  
        </Typography>

        <ImageAvatar/>
        <Typography  align="right" color="textSecondary" paragraph>
        Creative and dependable front-end web developer with an outstanding customer service record, and superb work ethic. Fast learner, hard worker, and team player who is proficient in an array of scripting languages and multimedia web tools. 
        </Typography>
   
      </Container>
      
    </div>
    </ThemeProvider>
  );
}
