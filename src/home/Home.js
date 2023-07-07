import { IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';


const projectsList = ["CRUD","ADD"];

const Home = (props) => {
  const [note, setNote] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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

  const handleTitleClick = (projectName) => {
   props.onSetCurrentProject(projectName)
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleHomeClick = () => {
    setIsHomeScreen(true);
    setSelectedImage(null);
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {isHomeScreen ? (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
          sx={{ position: 'absolute', left: '1rem', top: '1rem' }}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="home"
          onClick={handleHomeClick}
          sx={{ position: 'absolute', left: '1rem', top: '1rem' }}
        >
          <HomeIcon />
        </IconButton>
      )}
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
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
      >
        <List>
          {projectsList.map((item,index) => (
            <ListItem
              key={index}
              onClick={() => handleTitleClick(item)}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
};

export default Home;