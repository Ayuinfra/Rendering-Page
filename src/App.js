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
  const [currentProject, setCurrentProject] = useState();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const onSetCurrentProjectHandler = useCallback((projectName) => {
    setCurrentProject(projectName);
    setIsDrawerOpen(false);
  }, []);

  const onChangeProjectHandler = (projectName) => {
    if (!projectName) {
      return <Home onSetCurrentProject={onSetCurrentProjectHandler} />;
    }

    switch (projectName) {
      case "CRUD":
        return <CrudInnerApp />;
      case "IMAGES":
        return <Images />;
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
              <ListItemText primary={`${index + 1}. ${item}`} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
};

export default App;