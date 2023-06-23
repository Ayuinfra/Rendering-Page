import { Fragment, useState } from "react";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import { Button, Container, Grid } from "@material-ui/core";
import Login from "./screens/login/Login";
import { Typography } from "@mui/material";
import { userInfo } from "./dummydata/dummyData";
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