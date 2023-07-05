import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';

const Home = () => {
  const [note, setNote] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setNote(response.data);
    } catch (error) {
     
    }
  };

  const getRowColor = (completed) => {
    if (completed) {
      return 'YellowGreen';
    } else {
      return 'orange';
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '3rem', display: 'flexstart', marginBottom: '3rem' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: 'CadetBlue' }}>
              <TableCell style={{ color: 'Black' }}><b>Task</b></TableCell>
              <TableCell style={{ color: 'Black' }}><b>Status</b></TableCell>
              <TableCell style={{ color: 'Black' }}><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {note.map((user) => (
              <TableRow key={user.id} style={{ backgroundColor: getRowColor(user.completed) }}>
                <TableCell style={{ color: 'white' }}>{user.title}</TableCell>
                <TableCell style={{ color: 'white' }}>{user.completed ? 'Completed' : 'Incomplete'}</TableCell>
                <TableCell>
                  {!user.completed && (
                    <IconButton variant="outlined" color="primary">
                      <Edit />
                    </IconButton>
                  )}
                  <IconButton variant="outlined" color="secondary">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Home;