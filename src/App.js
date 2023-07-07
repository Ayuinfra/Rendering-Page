import { Fragment, useCallback, useState } from "react";
import CrudInnerApp from './crud/InnerApp';
import Home from "./home/Home";
import Images from "./images/InnerApp1"
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export const Projects = {
  CRUD : "crud",
  IMAGES : "images",
}

const projectsList = ["CRUD","IMAGES"];

const App = ()=>{

  const [currentProject,setCurrentProject] = useState();
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);

  const handleDrawerClose = ()=>{
    setIsDrawerOpen(false);
  }

  const handleDrawerOpen = ()=>{
    setIsDrawerOpen(true);
  }

  const onSetCurrentProjectHandler = useCallback((projectName)=>{
    setCurrentProject(projectName)
  },[])
  

  const onChangeProjectHandler = (projectName)=>{
    switch(projectName){
      case "CRUD" :
        return(
          <CrudInnerApp/>
        
      )
      case "IMAGES" : 
      return (
        <Images/>
      )
      default :
        return(
            <Home onSetCurrentProject={onSetCurrentProjectHandler}/>
        )
    }
  }
  
  return(
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

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={handleDrawerClose}
        >
        <List>
          {projectsList.map((item,index) => (
            <ListItem
              key={index}
              onClick={() => onSetCurrentProjectHandler(item)}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>

  )
}
export default App;
