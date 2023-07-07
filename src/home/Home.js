import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = (props) => {
  const [note, setNote] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isHomeScreen, setIsHomeScreen] = useState(true);

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


  return (
    <Container maxWidth="md" sx={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {isHomeScreen ? (
        <Typography variant="h4" component="h1" sx={{ textAlign: 'center', marginTop: '8rem' }}>
          Welcome to the Home Page
        </Typography>
      ) : (
        <Container sx={{ marginTop: '8rem' }}>
          <img
            src={selectedImage.url}
            alt={selectedImage.title}
            style={{ width: '100%' }}
          />
          <Typography variant="h6" component="h2" sx={{ textAlign: 'center', marginTop: '1rem' }}>
            {selectedImage.title}
          </Typography>
        </Container>
      )}
   
    </Container>
  );
};

export default Home;