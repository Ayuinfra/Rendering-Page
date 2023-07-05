import { IconButton, Paper, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Clear  } from '@mui/icons-material';
import { Search } from '@mui/icons-material';

const Home = () => {
  const [note, setNote] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
      setNote(response.data);
    } catch (error) {
      // Handle error
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  // Filter and sort the data based on the search term and task title
  const filteredAndSortedNote = note
    .filter((user) => user.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Container maxWidth="md" sx={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' , marginBottom: '3rem'}}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <IconButton size="small" edge="start" aria-label="search">
              <Search />
            </IconButton>
          ),
          endAdornment: (
            <IconButton size="small" edge="end" aria-label="clear" onClick={clearSearch}>
              <Clear />
            </IconButton>
          ),
          sx: { borderRadius: '50px' },
        }}
        sx={{ marginBottom: '1rem', width: '300px' }}
      />
      <Container sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {filteredAndSortedNote.map((user) => (
          <Paper key={user.id} sx={{ padding: '1rem', textAlign: 'center' }}>
            <img src={user.thumbnailUrl} alt={user.title} style={{ width: '100%', cursor: 'pointer' }} onClick={() => window.open(user.url, '_blank')} />
            <p>{user.title}</p>
          </Paper>
        ))}
      </Container>
    </Container>
  );
};

export default Home;