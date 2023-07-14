import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';


const Cube = () => {

  const count = useSelector((state)=>state.count);

  return (
    <Container maxWidth="md" sx={{marginTop:"2rem",display :"flexStart"}}>
      <Paper
        style={{
          width: 200,
          height: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#3f51b5',
          color: '#fff',
          fontSize: 10,
          fontWeight: 'bold',
        }}
      >
        <Typography variant="h1">{count}</Typography>
    </Paper>
    </Container>
    
  );
};

export default Cube;