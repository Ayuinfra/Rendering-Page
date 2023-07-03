import { Button } from '@mui/base';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';


const EditUser = ({ user, handleUpdateUser, handleGoHome }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
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

    const updatedUser = {
      id: user.id,
      firstName,
      lastName,
      email,
    };
    handleUpdateUser(updatedUser);
    setFirstName('');
    setLastName('');
    setEmail('');
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    handleGoHome();
  };

  const validateName = (name) => {
    
    const namePattern = /^[a-zA-Z ]*$/;;
    return namePattern.test(name);
  };

  const validateEmail = (email) => {
    
    const emailPattern = /^\s*[\w+\-.]+@[a-zA-Z\d\-]+(\.[a-zA-Z\d\-]+)*\s*$/;
    return emailPattern.test(email);
  };

  return (
    <Dialog open={true} onClose={handleGoHome}>
      <DialogTitle>Edit User</DialogTitle>
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
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUser;