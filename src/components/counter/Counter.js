import React from 'react';
import {  Container } from '@mui/material';



const Counter = ({ handleIncrement, handleDecrement }) => {
  return (
    <Container maxWidth="md" sx={{ marginTop: "1rem", display: "flexStart" }}>
      {/* <Paper elevation={0}>
        <Box marginBottom={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleIncrement}>
            Add + 1
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDecrement}
            style={{ marginLeft: '10px' }}>
            Sub - 1
          </Button>
        </Box>
       

      </Paper> */}
    </Container>

  );
};


export default Counter;