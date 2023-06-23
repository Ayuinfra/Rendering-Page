
import { Routes, Route  } from "react-router";
import NotFound from "./notfound/NotFound";
import Data from "./screens/data/Data";

const App = () => {


  return (
       
      
          <Routes>
            <Route exact path="*" element = {<NotFound/>} />
            <Route exact path="/" element = {<Data/>}/>
          </Routes>
          

    
  );
};
export default App;