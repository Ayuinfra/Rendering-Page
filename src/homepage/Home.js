import { IconButton, Paper, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Clear } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import Pagination from '@mui/material/Pagination';

const Home = () => {
  const [note, setNote] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(note.length / itemsPerPage);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setNote(response.data);
    } catch (error) {
      // Handle error
    }
  };


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset the page number when a new search term is entered
  };

  const clearSearch = () => {
    setSearchTerm('');
    setPage(1); // Reset the page number when the search term is cleared
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Filter and sort the data based on the search term and task title
  const filteredAndSortedNote = note
    .filter((user) => user.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.title.localeCompare(b.title));

  // Calculate the index range of items to display for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page of items
  const paginatedNote = filteredAndSortedNote.slice(startIndex, endIndex);

  return (
    <Container maxWidth="md" sx={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
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
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{ marginTop: '1rem', marginBottom: '2rem' }}
      />
      <Container sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {paginatedNote.map((user) => (
          <Paper
            key={user.id}
            sx={{
              padding: '1rem',
              textAlign: 'center',
            }}
          >
            <img
              src={user.thumbnailUrl}
              alt={user.title}
              style={{
                width: '100%',
                aspectRatio: '1/1',
                objectFit: 'cover',
                cursor: 'pointer',
              }}
              onClick={() => window.location.href = user.url}
            />
            <p>{user.title}</p>
          </Paper>
        ))}
      </Container>
    </Container>
  );
};

export default Home;