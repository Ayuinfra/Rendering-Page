import { Fragment, useState } from "react";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import { Button, Container, Grid } from "@material-ui/core";
import Login from "./screens/login/Login";
import { Typography } from "@mui/material";
import { userInfo } from "./dummydata/dummyData";

const App = () => {

  const [currentPage, setCurrentPage] = useState("login");
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', password: '', gender: '', isLoggedIn: false })

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (email, password) => {
    const user = userInfo.find(item => item.email === email);
    if (email===user.email && password === user.password){
      
      const loggedInUser = userInfo.find((data)=> data.email === email );
      setIsLoggedin(true);
      setUserData(loggedInUser);
      setCurrentPage('home');
    }
    else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedin(false);
    setCurrentPage('login');
    setUserData( );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return (
          <Login
            handleLogin={handleLogin}
          />
        );
      case 'home':
        return <Home userData={userData} />;
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
            {isLoggedIn? (
               <Button onClick={handleLogout}>Logout</Button>
            ):(
              <Button onClick={() => handlePageChange('login')}>Login</Button>
            )}
            <>
              <Button onClick={() => handlePageChange('home')}>Home</Button>
              <Button onClick={() => handlePageChange('about')}>About</Button>
            </>

          </Grid>
          <Grid item>
            {<Typography
              variant="h4" align="center">
              Welcome to {currentPage} page
            </Typography>}
          </Grid>
          <Grid item>{renderPage()}</Grid>
        </Grid>
      </Fragment>
    </Container>
  );
};
export default App;