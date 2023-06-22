import { Fragment, useState } from "react";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import { Button, Container, Grid } from "@material-ui/core";
import Login from "./screens/login/Login";

const App = () =>{
   const[currentPage,setCurrentPage]=useState("login");
   const[isLoggedIn,setIsLoggedin]=useState(false);
   const[email,setEmail]=useState('');
   const[password,setPassword]=useState('')


   
   const handlePageChange = (page) => {
    setCurrentPage(page);
   };

   const handleLogin = () =>{
    if(email==='hi@gmail.com' && password==='password'){
      setIsLoggedin(true);
      setCurrentPage('home');
    }
    else{
      alert('Invalid email or password')
    }
   }

   const renderPage = () =>{
    switch (currentPage) {
      case'login':
      return (
        <Login 
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
       />
      );
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
     
      default:
        return null;
    }
   };
      return (
      
        <Container>
          <Fragment>
          <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
        
            <>
          <Button onClick={() => handlePageChange('home')}>Home</Button>
          <Button onClick={() => handlePageChange('about')}>About</Button>
          <Button onClick={() => handlePageChange('login')}>Login</Button>
          </>
      
          </Grid>
        <Grid item>
          {/* <Typography
           variant="h4" align="center">
            Welcome to {currentPage} page
          </Typography> */}
        </Grid>
        <Grid item>{renderPage()}</Grid>
        </Grid>
        </Fragment>
</Container>       
  );
};
export default App;