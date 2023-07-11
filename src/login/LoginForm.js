import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router';

const LoginForm = ({
  handleLogin
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onMoveSignupHandler = () => {
    navigate('../signup');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(''); // Clear error message when email field changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(''); // Clear error message when password field changes
  };

  const validateLoginFields = () => {
    if (email.trim() === '' || password.trim() === '') {
      setError('Please enter email and password');
      return false;
    }
    return true;
  };

  const handleLoginClick = () => {
    if (validateLoginFields()) {
      const success = handleLogin(email, password);
      if (success) {
        navigate('/home');
      } else {
        setError('Invalid email or password');
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            Login
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={handleEmailChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            margin="normal"
          />
          <Button variant="contained" onClick={handleLoginClick}>
            Login
          </Button>
          <Button variant="contained" sx={{ marginLeft: '10px' }} onClick={onMoveSignupHandler}>
            Signup
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginForm;