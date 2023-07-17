import React from 'react';
import { Button, Paper, Box } from '@mui/material';
import { Container } from '@mui/system';
import { decrement, increment } from '../../store/actions/Actions';
import { connect } from 'react-redux';

const Counter = ({ handleIncrement, handleDecrement, handleIncrementBy2, handleDecrementBy2 }) => {
  return (
    <Container maxWidth="md" sx={{marginTop:"2rem",display :"flexStart"}}>
    <Paper elevation={0}>
      <Box marginBottom={1}>
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          Add
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDecrement}>
          Subtract
        </Button>
      </Box>
      <Box marginBottom={1}>
        <Button variant="contained" color="primary" onClick={handleIncrementBy2}>
          Add + 2
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDecrementBy2}>
          Subtract - 2
        </Button>
      </Box>
    </Paper>
    </Container>

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

