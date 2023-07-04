import { Button } from '@mui/base';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [note, setNote] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setNote(response.data);
      console.log(response.data)
    } catch (error) {
     
    }
  };
  

  return (
    <Container maxWidth = "md" sx={{marginTop:'2rem',display:'flexstart'}}>
<TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Task</b></TableCell>
            <TableCell><b>Status</b></TableCell>
            <TableCell><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {note.map((users) => (
            <TableRow key={users.id}>
              <TableCell>{users.title}</TableCell>
              <TableCell>{users.completed ? 'Completed' : 'Incomplete'}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary">
                  Edit
                </Button>
                <Button variant="outlined" color="secondary">
                  Delete
                </Button>
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