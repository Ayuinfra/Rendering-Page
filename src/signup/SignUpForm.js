import React from 'react';
import { Button, TextField, Typography, Container, Card, CardContent } from '@mui/material';

const SignupForm = ({
  name,
  email,
  password,
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleSignup
}) => (
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
        <Button variant="contained" onClick={handleSignup}>
          Signup
        </Button>
      </CardContent>
    </Card>
  </Container>
);

export default SignupForm;