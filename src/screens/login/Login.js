import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Login = ({ handleLogin }) => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const onLoginHandler = ()=>{
    handleLogin(email,password)
  }

  return (
    <>
      <TextField
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        fullWidth
        margin="normal"
      />
      <Button onClick={onLoginHandler} variant="contained" color="primary">
        Login
      </Button>
    </>
  );
};

export default Login;