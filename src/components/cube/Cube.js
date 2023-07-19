import React from 'react';
import { Paper, Typography, Chip } from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';



const Cube = () => {
  const count = useSelector((state) => state.count);

  return (
    <>
      <Container maxWidth="md" sx={{ marginTop: "0.1rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Paper
          style={{
            width: 200,
            height: 200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#3f51b5',
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          <Typography variant="h1">{count}</Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Cube;