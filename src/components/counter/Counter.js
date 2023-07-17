import React from 'react';
import { Button, Paper } from '@mui/material';
import { connect } from 'react-redux';
import { increment, decrement } from '../../store/actions/Actions';

const Counter = ({ handleIncrement, handleDecrement, handleIncrementByTwo, handleDecrementByTwo }) => {
  return (
    <Paper elevation={0}>
      <Button variant="contained" color="primary" onClick={handleIncrement}>
        Add
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrement}>
        Subtract
      </Button>
     
      <Button variant="contained" color="primary" onClick={handleIncrementByTwo}>
        Add by 2
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrementByTwo}>
        Subtract by 2
      </Button>
    </Paper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => dispatch(increment(1)),
    handleDecrement: () => dispatch(decrement(1)),
    handleIncrementByTwo: () => dispatch(increment(2)),
    handleDecrementByTwo: () => dispatch(decrement(2)),
  };
};

export default connect(null, mapDispatchToProps)(Counter);