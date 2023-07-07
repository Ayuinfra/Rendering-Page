import { useCallback, useState } from "react";
import CrudInnerApp from './crud/InnerApp';
import Home from "./home/Home";
import Images from "./images/InnerApp1"

export const Projects = {
  CRUD : "crud",
  IMAGES : "images",
}

const App = ()=>{

  const [currentProject,setCurrentProject] = useState();
  

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
      onChangeProjectHandler(currentProject)
  )
}
export default App;
