import { Fragment, useState } from "react";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Login from "./screens/login/Login";



const App = () =>{
   const[currentPage,setCurrentPage]=useState("home");
   const handlePageChange = (page) => {
    setCurrentPage(page);
   };

   const renderPage = () =>{
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'login':
        return <Login />;
      default:
        return null;
    }
   };
      return (
      
        <Container>
          <Fragment>
          <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Button onClick={() => handlePageChange('home')}>Home</Button>
          <Button onClick={() => handlePageChange('about')}>About</Button>
          <Button onClick={() => handlePageChange('login')}>Login</Button>
          </Grid>
        <Grid item>
          <Typography
           variant="h4" align="center">
            Welcome to {currentPage} page
          </Typography>
        </Grid>
        <Grid item>{renderPage()}</Grid>
        </Grid>
        </Fragment>
</Container>       
  );
};
export default App;