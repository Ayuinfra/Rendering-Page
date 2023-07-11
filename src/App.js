import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './login/LoginForm';
import SignupForm from './signup/SignUpForm';
import Products from './products/Products';

const App = () => {

  const navigate = useNavigate();
  const [users,setUsers] = useState([])

  const handleLogin = (email,password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user)
      return true;
    else 
      return false;
  };

  const handleSignup = (userInfo) => {
    setUsers([...users, userInfo]);
    navigate('/');
  };

  const handleLogout = () => {
    navigate('/');
  };

  const loadLoginPage = (
      <LoginForm
        handleLogin={handleLogin}
      />
    );

  const loadSignUpPage = (
      <SignupForm
        handleSignup={handleSignup}
      />
    );

  return (
    <Routes>
      <Route path="/" element={loadLoginPage} />
      <Route path="/home" element={<Products handleLogout={handleLogout} />} />
      <Route path="/signup" element={loadSignUpPage} />
    </Routes>
  );
};

export default App;