import { Button } from '@mui/base';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';


const Home = () => {
  const [note, setNote] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // get the data from the api
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      // convert the data to json
      const data =  await response.json();
      console.log(data);
      setNote(data);
    } catch (error) {
      // make sure to catch any error
      console.log('Error fetching data:', error);
    }
  };
  

  return (
    <Container maxWidth = "md" sx={{marginTop:'2rem',display:'flexstart'}}>
<TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell><b>Task</b></TableCell>
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