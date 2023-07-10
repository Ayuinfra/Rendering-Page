import React from 'react';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cube: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 48,
    fontWeight: 'bold',
  },
}));

const Cube = ({ count }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.cube} component={Typography} variant="h1">
      {count}
    </Paper>
  );
};

export default Cube;