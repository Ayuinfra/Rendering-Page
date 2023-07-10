import React, { useState } from 'react';
import Cube from './Cube';
import Counter from './CounterButtons';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    height: '100vh',
  },
  spacer: {
    marginTop: theme.spacing(2),
  },
}));

const CubeCounter = () => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={classes.container}>
      <Cube count={count} />
      <div className={classes.spacer} />
      <Counter
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default CubeCounter;