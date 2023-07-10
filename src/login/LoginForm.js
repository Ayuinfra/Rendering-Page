import React from 'react';
import { Button, TextField, Typography, Container, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router';

const LoginForm = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleLogin
}) => {

  const navigate = useNavigate();
  const onMoveSignupHandler = ()=>{
      navigate('../signup')
  }

  return(
  <Container maxWidth="sm">
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" align="center">
          Login
        </Typography>
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
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="contained" sx={{marginLeft : '10px'}} onClick={onMoveSignupHandler}>
          Signup
        </Button>
      </CardContent>
    </Card>
  </Container>
);
}

export default LoginForm;