import React from 'react';
import CubeCounter from './CounterCube';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Cube Counter App</h1>
      <CubeCounter />
    </div>
  );
};

export default App;