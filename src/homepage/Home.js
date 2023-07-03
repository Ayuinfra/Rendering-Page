import React, { useState } from 'react';

import { AddCircleOutline, Edit, Delete } from '@mui/icons-material';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const Home = ({ users, handleAddUser, handleEditUser, handleDeleteUser }) => {
  const [deleteUserId, setDeleteUserId] = useState(null);

  const handleDeleteConfirmation = (userId) => {
    setDeleteUserId(userId);
  };

  const handleDeleteCancel = () => {
    setDeleteUserId(null);
  };

  const handleDeleteConfirm = () => {
    handleDeleteUser(deleteUserId);
    setDeleteUserId(null);
  };

  const sortedUsers = users.slice().sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem', display: 'flexStart' }}  >
      <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
                <b>First Name</b>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
              <b>Last Name</b>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" fontWeight="bold">
              <b>Email</b>
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddCircleOutline />}
                onClick={handleAddUser}
              >
                Add User
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUsers.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Typography>No records found</Typography>
              </TableCell>
            </TableRow>
          ) : (
            sortedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEditUser(user.id)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteConfirmation(user.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Dialog open={deleteUserId !== null} onClose={handleDeleteCancel}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
    </Container>
    
  );
};

export default Home;