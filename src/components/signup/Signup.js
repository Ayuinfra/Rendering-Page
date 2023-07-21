import React, { useRef} from 'react';
import { Button, TextField, Typography, Container, Card, CardContent } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

const Signup = ({
  handleSignup
}) => {

  const navigate = useNavigate();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {

    const name = nameRef.current.value.trim();
    const email  = emailRef.current.value.trim();
    const password  = passwordRef.current.value.trim();

    if (name === '' || email === '' || password === '') {
        alert('Please fill in all fields');
    } else {

      const obj = {
        name : name,
        email : email,
        password : password
      }
      handleSignup(obj);
      clearForm();
      navigate('/');
    }
  };

  const clearForm = () => {
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  const handleBackClick = () => {
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5" component="div" align="center">
            Signup
          </Typography>
          <TextField
            fullWidth
            inputRef={nameRef}
            label="Name"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            inputRef={emailRef}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            inputRef={passwordRef}
            margin="normal"
          />
          <Button variant="contained" onClick={handleSubmit}>
            Signup
          </Button>
          <Button variant="contained" sx={{ marginLeft: '10px' }} onClick={handleBackClick}>
            Back
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Signup;