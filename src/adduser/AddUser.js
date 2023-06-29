import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';

const AddUserPage = ({ handleAddUserSubmit, handleGoBack }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    if (firstName && lastName && email) {
      handleAddUserSubmit({ firstName, lastName, email });
      setFirstName('');
      setLastName('');
      setEmail('');
    }
  };

  return (
    <Container>
      <h2>Add User</h2>
      <TextField
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddUser}>Submit</Button>
      <Button variant="contained" onClick={handleGoBack}>Back</Button>
    </Container>
  );
};

export default AddUserPage;