import React, { useState, useEffect } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import LoginForm from './login/LoginForm';
import SignupForm from './signup/SignUpForm';
import Products from './products/Products';
import { Button, Container } from '@mui/material';
import axios from 'axios';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleLogin = () => {
    // Validate login credentials here
    // For simplicity, we'll use static data
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleSignup = () => {
    // Save user data here
    alert('Signup successful');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Routes>
      <>
        <Route path="/login">
          {isLoggedIn ? (
            <Route component={() => <h1>You are already logged in.</h1>} />
          ) : (
            <LoginForm
              email={email}
              password={password}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleLogin={handleLogin}
            />
          )}
        </Route>
        <Route path="/signup">
          {isLoggedIn ? (
            <Route component={() => <h1>You are already signed up and logged in.</h1>} />
          ) : (
            <SignupForm
              name={name}
              email={email}
              password={password}
              handleNameChange={handleNameChange}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleSignup={handleSignup}
            />
          )}
        </Route>
        <Route path="/products">
          {isLoggedIn ? (
            <Products products={products} handleLogout={handleLogout} />
          ) : (
            <Route component={() => <h1>Please log in to view the products.</h1>} />
          )}
        </Route>
        <Route exact path="/">
          {isLoggedIn ? (
            <Route component={() => <h1>Welcome! You are already logged in.</h1>} />
          ) : (
            <Container>
              <Button variant="contained" component={Link} to="/login">
                Login
              </Button>
              <Button variant="contained" component={Link} to="/signup">
                Signup
              </Button>
            </Container>
          )}
        </Route>
      </>
    </Routes>
  );
};

export default App;