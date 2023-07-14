import React from 'react';
import { Paper, Typography } from '@mui/material';

const Cube = ({ count }) => {
  return (
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
  );
};

export default Cube;