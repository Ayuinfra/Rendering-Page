import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Card, CardContent } from '@mui/material';

const SignupForm = ({
  handleSignup
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    handleSignup();
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
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
            label="Name"
            value={name}
            onChange={handleNameChange}
            margin="normal"
          />
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
          <Button variant="contained" onClick={handleSubmit}>
            Signup
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SignupForm;