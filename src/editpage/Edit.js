import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';


const EditUser = ({ user, handleUpdateUser, handleGoHome }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
    }
  }, [user]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      id: user.id,
      firstName,
      lastName,
      email,
    };
    handleUpdateUser(updatedUser);
  };

  return (
    <Dialog open={true} onClose={handleGoHome}>
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <form onSubmit={handleFormSubmit}>
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
          <DialogActions>
            <Button onClick={handleGoHome}>Back</Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!firstName || !lastName || !email}
            >
              Update
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditUser;
