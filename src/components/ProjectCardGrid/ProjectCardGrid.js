import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ProjectCard from "../projectcard/ProjectCard";
import firstImage from "../../images/projects/picniqapp.png";
import secondImage from "../../images/projects/habit1.png";
import thirdImage from "../../images/projects/weatherdashboard.png";
import fourthImage from "../../images/projects/scheduler.png";
import fifthImage from "../../images/projects/fitnessmain.png";
import sixthImage from "../../images/projects/budget-dashboard.png";

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
    description: "This application is a dynamic platform, designed to provide the nearest parks and restaurants based on the users’ location.",
    url: "https://jpbrickhouse.github.io/Picniq/", 
    codeLink:"https://github.com/JPBrickhouse/Picniq"
  },
  {
    id: 2,
    image: secondImage,
    title: "Habitude",
    description: "fjsdhfjksdhf",
    url: "https://habitudeapp.herokuapp.com/", 
    codeLink:"https://github.com/dresroldan/Habitude"
  },
  {
    id: 3,
    image: thirdImage,
    title: "Weather Dashboard",
    description: "This application displays weather conditions for multiple cities.",
    url: "https://dresroldan.github.io/weather-dashboard/", 
    codeLink:"https://github.com/dresroldan/weather-dashboard"
  },
  {
    id: 4,
    image: fourthImage,
    title: "Work Day Scheduler",
    description: "This application is a calendar that allows the user to save events for each standard business hour (9am-5pm).",
    url: "https://dresroldan.github.io/work-day-scheduler/", 
    codeLink:"https://github.com/dresroldan/work-day-scheduler"
  },

  {
    id: 5,
    image: fifthImage,
    title: "Workout Tracker",
    description: "fjsdhfjksdhf",
    url: "https://limitless-woodland-88147.herokuapp.com/?id=5fa1f26b8d9f8f0017c7740e", 
    codeLink:"https://github.com/dresroldan/workout-tracker"
  },
  {
    id: 6,
    image: sixthImage,
    title: "PWA Budget Tracker",
    description: "This application allows users to add expenses and deposits to their budget with or without an online connection using Progressive Web Application (PWA).",
    url: "https://pwa-budget-tracker-andres.herokuapp.com/", 
    codeLink:"https://github.com/dresroldan/pwa-budget-tracker"
  },
];



export default function MediaCard() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md" id="applications">
      <Grid container spacing={8}>
        {cards.map((card) => {
          return (
            <ProjectCard
              id={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
              href={card.url}
              onClick={card.codeLink}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
