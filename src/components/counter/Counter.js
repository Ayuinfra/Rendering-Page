import React from 'react';
import { Button, Paper } from '@mui/material';

const Counter = ({ handleIncrement, handleDecrement }) => {
  return (
    <Paper component={React.Fragment} elevation={0}>
      <Button variant="contained" color="primary" onClick={handleIncrement}>
        Add
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrement} >
        Subtract
      </Button>
    </Paper>
  );
};

export default Counter;