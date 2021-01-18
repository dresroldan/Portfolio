import React from "react";
import { Typography, Container, makeStyles } from "@material-ui/core";
import Avatar from "../Avatar/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  aboutContent: {
    backgroundColor: "black",
  },

  textPadding: {
    paddingTop: 25,
  },
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.aboutContent}>
      <Container maxWidth="md">
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="flex-end"
          m={1}
          p={1}
        >
          <Box p={1}>
            <Typography variant="h6" color="white" paragraph>
              Creative and dependable front-end web developer with an
              outstanding customer service record, and superb work ethic. Fast
              learner, hard worker, and team player who is proficient in an
              array of scripting languages and multimedia web tools.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
