import React from 'react';
import { makeStyles, Avatar } from '@material-ui/core';

import AvatarImage from '../../images/avatarimage.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Avatar alt="Remy Sharp" src= {AvatarImage} className={classes.large} />
    </div>
  );
}
