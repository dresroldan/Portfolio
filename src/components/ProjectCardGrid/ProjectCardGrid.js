import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ProjectCard from "../ProjectCard/ProjectCard";
import firstImage from "../../images/picniqapp.png";
import secondImage from "../../images/habit1.png";
import thirdImage from "../../images/weatherdashboard.png";
import fourthImage from "../../images/scheduler.png";
import fifthImage from "../../images/eatdaburgerapp.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 140,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const cards = [
  {
    id: 1,
    image: firstImage,
    title: "Picniq",
    description: "fjsdhfjksdhf",
  },
  {
    id: 2,
    image: secondImage,
    title: "Habitude",
    description: "fjsdhfjksdhf",
  },
  {
    id: 3,
    image: thirdImage,
    title: "Weather Dashboard",
    description: "fjsdhfjksdhf",
  },
  {
    id: 4,
    image: fourthImage,
    title: "Work Day Scheduler",
    description: "fjsdhfjksdhf",
  },

  {
    id: 5,
    image: fifthImage,
    title: "Eat-Da-Burger",
    description: "fjsdhfjksdhf",
  },
];



export default function MediaCard() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={8}>
        {cards.map((card) => {
          return (
            <ProjectCard
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
