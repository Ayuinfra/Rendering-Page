import React,{useMemo} from "react";
import { Container, Typography } from "@material-ui/core";
import ProductGrid from "./components/productgrid/ProductGrid";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  // Customize your theme here
});

const App = () => {
  // Check if the user is authenticated
  const user = useSelector((state) => state.auth.user);

  const rourtesLoader = useMemo((props)=>{
    if(user){
        return(
            <Route
                path="home"
                element={<Home/>}
            />
        )
    }
  

  },[])

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ marginTop: "2rem", display: "flexStart" }}>
        <Routes>
          {/* Public routes */}

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Private route: Only accessible after login */}
         {rourtesLoader}
          {/* <Route
            path="/home"
            element={<PrivateRoute isAuthenticated={!!user} component={<Home />} />}
          /> */}
=
          {/* Redirect to login if no matching route */}
          <Route path="/" element={<Link to="/login" />} />
        </Routes>
      </Container>
    </ThemeProvider>

  );

 
};


const Home = () => {

  return (

    <>

      <Typography variant="h4" align="center">

        Jewelry Collection

      </Typography>

      <ProductGrid />

    </>

  );

};


export default App;