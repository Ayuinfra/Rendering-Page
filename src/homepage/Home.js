import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Edit } from '@mui/icons-material';
import { Delete } from '@mui/icons-material';

const Home = () => {
  const [note, setNote] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setNote(response.data);
    } catch (error) {
      // Handle error
    }
  };

  const getRowColor = (completed) => {
    if (completed) {
      return 'green';
    } else {
      return 'orange';
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the data based on the search term
  const filteredNote = note.filter((user) =>
    user.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ marginTop: '3rem', display: 'flexstart', marginBottom: '3rem' }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        sx={{ marginBottom: '1rem' }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: 'blue' }}>
              <TableCell style={{ color: 'white' }}><b>Task</b></TableCell>
              <TableCell style={{ color: 'white' }}><b>Status</b></TableCell>
              <TableCell style={{ color: 'white' }}><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredNote.map((user) => (
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