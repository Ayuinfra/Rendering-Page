import { useCallback, useState } from "react";
import CrudInnerApp from './crud/InnerApp';
import Home from "./home/Home";

export const Projects = {
  CRUD : "crud",
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
