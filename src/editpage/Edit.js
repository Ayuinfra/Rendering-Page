import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';

const EditUserPage = ({ user, handleUpdateUser, handleGoBack }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [isFormDirty, setIsFormDirty] = useState(false);

  const handleUpdate = () => {
    if (isFormDirty && firstName && lastName && email) {
      handleUpdateUser(user.id, { firstName, lastName, email });
      setIsFormDirty(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (user[name] !== value) {
      setIsFormDirty(true);
    } else {
      setIsFormDirty(false);
    }

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem', display: 'flexStart' }}>
      <h2>Edit User</h2>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleUpdate} disabled={!isFormDirty}>
        Update
      </Button>
      <Button variant="contained" onClick={handleGoBack}>Back</Button>
    </Container>
  );
};

export default EditUserPage;



