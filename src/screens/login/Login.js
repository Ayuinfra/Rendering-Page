import React from 'react';
import { TextField, Button } from '@mui/material';

const Login = ({ email, password, setEmail, setPassword, handleLogin }) => {
  return (
    <>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        fullWidth
        margin="normal"
      />
      <Button onClick={handleLogin} variant="contained" color="primary">
        Login
      </Button>
    </>
  );
};

export default Login;