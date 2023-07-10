import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginForm from './login/LoginForm';
import SignupForm from './signup/SignUpForm';
import Products from './products/Products';

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleSignup = () => {
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    setIsLoggedIn(true);
    navigate('/login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
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

  const loadLoginPage = (
      <LoginForm
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleLogin={handleLogin}
      />
    );

  const loadSignUpPage = (
      <SignupForm
        name={name}
        email={email}
        password={password}
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSignup={handleSignup}
      />
    );

  return (
    <Routes>
      <Route path="/" element={loadSignUpPage} />
      <Route path="/login" element={loadLoginPage} />
      <Route path="/home" element={<Products handleLogout={handleLogout} />} />
      <Route path="/signup" element={loadSignUpPage} />
    </Routes>
  );
};

export default App;