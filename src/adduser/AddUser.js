import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";
import { useState } from "react";

const AddUser = ({ handleAddUser, handleGoHome }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = () => {
    const newUser = {
      firstName,
      lastName,
      email,
    };
    handleAddUser(newUser);
    setFirstName('');
    setLastName('');
    setEmail('');
    handleGoHome();
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