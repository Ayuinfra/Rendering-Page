import React, { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const HomePage = ({ users, handleAddUser, handleEditUser, handleDeleteUser }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState(null);
 

  const handleOpenDeleteDialog = (userId) => {
    setDeletingUserId(userId);
    setDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeletingUserId(null);
    setDeleteDialogOpen(false);
  };

  const handleConfirmDelete = () => {
    handleDeleteUser(deletingUserId);
    setDeletingUserId(null);
    setDeleteDialogOpen(false);
  };



  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem', display: 'flexStart' }}>

<>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >
              <b>First Name</b>
            </TableCell>
            <TableCell >
              <b>Last Name</b>
            </TableCell>
            <TableCell >
              <b>Email</b>
            </TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.firstName}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEditUser(user.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleOpenDeleteDialog(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddUser}
        style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}
      >
        Add User
      </Button>
      <Dialog open={deleteDialogOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Are you sure you want to delete this user?</DialogTitle>
        <DialogContent>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmDelete} color="primary">
            Yes
          </Button>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
    </Container>
  
  );
};

export default HomePage;