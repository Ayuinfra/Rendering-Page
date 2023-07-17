import React from 'react';
import { Box, Button, Container, Paper } from '@mui/material';
import { connect } from 'react-redux';
import { increment, decrement } from '../../store/actions/Actions';

const Counter = ({ handleIncrement, handleDecrement, handleIncrementByTwo, handleDecrementByTwo }) => {
  return (
    <Container maxWidth="md" sx={{marginTop:"1rem",display :"flexStart"}}>
 <Paper elevation={0}>
      <Box marginBottom={1}>
      <Button variant="contained" color="primary" onClick={handleIncrement}>
        Add
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrement}   style={{ marginLeft: '10px' }}>
        Sub
      </Button>
      </Box>
      <Box marginBottom={1}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleIncrementByTwo}
        
      >
        Add + 2
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDecrementByTwo}
        style={{ marginLeft: '10px' }}
      >
        Sub - 2
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