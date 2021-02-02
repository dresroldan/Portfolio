import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ProjectCard from "../ProjectCard/ProjectCard";
import firstImage from "../../images/Projects/picniqapp.png";
import secondImage from "../../images/Projects/habit1.png";
import thirdImage from "../../images/Projects/weatherdashboard.png";
import fourthImage from "../../images/Projects/dermpal.png";

import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 150,
  },
  cardGrid: {
    // paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(12),
  },
  projectContainer: {
    paddingTop: "100px",
    fontFamily: "Fluro",
  },
}));

const cards = [
  {
    id: 4,
    image: fourthImage,
    title: "DermPal",
    description:
      "DermPal is a barcode scanning app that is designed to help the user find skincare products that are compatible with their skin.",
    demoLink: "https://dermpal1.herokuapp.com/",
    codeLink: "https://github.com/Bbeyenene/dermpal1",
  },
  {
    id: 1,
    image: firstImage,
    title: "Picniq",
    description:
      "This application is a dynamic platform, designed to provide the nearest parks and restaurants based on the users’ location.",
    demoLink: "https://jpbrickhouse.github.io/Picniq/",
    codeLink: "https://github.com/JPBrickhouse/Picniq",
  },
  {
    id: 2,
    image: secondImage,
    title: "Habitude",
    description: "fjsdhfjksdhf",
    demoLink: "https://habitudeapp.herokuapp.com/",
    codeLink: "https://github.com/dresroldan/Habitude",
  },
  {
    id: 3,
    image: thirdImage,
    title: "Weather Dashboard",
    description:
      "This application displays weather conditions for multiple cities.",
    demoLink: "https://dresroldan.github.io/weather-dashboard/",
    codeLink: "https://github.com/dresroldan/weather-dashboard",
  },
];

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div id="PROJECTS" id="applications" className={classes.projectContainer}>
      <Typography component="h2" variant="h8">
        <Box fontWeight="fontWeightBold" textAlign="center" mb={3}>
          Projects
        </Box>
      </Typography>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={8}>
          {cards.map((card) => {
            return (
              <ProjectCard
                id={card.id}
                image={card.image}
                title={card.title}
                // description={card.description}
                demoLink={card.demoLink}
                codeLink={card.codeLink}
              />
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
