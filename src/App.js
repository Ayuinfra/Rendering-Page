import { Fragment, useCallback, useState } from "react";
import CrudInnerApp from './crud/InnerApp';
import Home from "./home/Home";
import Images from "./images/InnerApp1";
import { Drawer, IconButton, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CubeCounter from "./cube/InnerApp2";

export const Projects = {
  CRUD: "crud",
  IMAGES: "images",
  CUBE: "cube",
};

const projectsList = ["CRUD", "IMAGES", "CUBE"];

const App = () => {
  //* State to track the current project
  const [currentProject, setCurrentProject] = useState(); 
 
  //* State to track the drawer open/close
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 


  //* Handler to close the drawer
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };


   //* Handler to open the drawer
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const onSetCurrentProjectHandler = useCallback((projectName) => {
    
    //* Set the current project
    setCurrentProject(projectName);

    // Close the drawer after setting the project
    setIsDrawerOpen(false); 
  }, []);

  const onChangeProjectHandler = (projectName) => {
    if (!projectName) {

      // If no project selected, show the Home component
      return <Home onSetCurrentProject={onSetCurrentProjectHandler} />;
    }

    switch (projectName) {
      // Render the CRUD component
      case "CRUD":
        return <CrudInnerApp />;

      // Render the Images component
      case "IMAGES":
        return <Images />;

      // Render the CubeCounter component
      case "CUBE":
        return <CubeCounter />;
        
      default:
        return <Home onSetCurrentProject={onSetCurrentProjectHandler} />;
    }
  };

  return (
    <Fragment>
      {onChangeProjectHandler(currentProject)}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerOpen}
        sx={{ position: 'absolute', left: '1rem', top: '1rem' }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerClose}>
        <List>
          <ListItem key="home" onClick={() => onSetCurrentProjectHandler(null)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </ListItem>
          {projectsList.map((item, index) => (
            <ListItem key={index} onClick={() => onSetCurrentProjectHandler(item)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default App;