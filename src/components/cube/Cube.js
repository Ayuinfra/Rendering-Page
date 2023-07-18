import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cube: {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'grey',
    color: 'black',
    fontSize: 48,
    fontWeight: 'bold',
  },
}));

const Cube = () => {
  const classes = useStyles();
  const count = useSelector((state) => state.count);

  return (
    <Paper className={classes.cube} component={Typography} variant="h1">
      {count}
    </Paper>
  );
};

export default Cube;