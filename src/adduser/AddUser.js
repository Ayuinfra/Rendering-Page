import { Button } from '@mui/base';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';


const AddUser = ({ handleAddUser, handleGoHome }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleFormSubmit = () => {
    if (!validateName(firstName)) {
      setFirstNameError(true);
      return;
    }

    if (!validateName(lastName)) {
      setLastNameError(true);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
    };
    handleAddUser(newUser);
    setFirstName('');
    setLastName('');
    setEmail('');
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    handleGoHome();
  };

  const validateName = (name) => {
    
    const namePattern = /^[a-zA-Z ]*$/;
    return namePattern.test(name);
  };

  const validateEmail = (email) => {
    
    const emailPattern = /^\s*[\w+\-.]+@[a-zA-Z\d\-]+(\.[a-zA-Z\d\-]+)*\s*$/;
    return emailPattern.test(email);
  };

  return (
    <Dialog open={true} onClose={handleGoHome}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          margin="normal"
          error={firstNameError}
          helperText={firstNameError && 'Invalid first name'}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          margin="normal"
          error={lastNameError}
          helperText={lastNameError && 'Invalid last name'}
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          error={emailError}
          helperText={emailError && 'Invalid email'}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleGoHome} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleFormSubmit}
          variant="contained"
          color="primary"
          disabled={!firstName || !lastName || !email}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUser;