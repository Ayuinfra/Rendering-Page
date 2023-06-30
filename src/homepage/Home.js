import React, { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const HomePage = ({ users, handleAddUser, handleEditUser, handleDeleteUser }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [sortColumn, setSortColumn] = useState('firstName');
  const [userList,setUserList] = useState([])
  const isDataAvailable = users.length>0;

  useEffect(() => {
    
    users.sort((a, b) => a.firstName.localeCompare(b.firstName));
    setUserList(users)
  }, [users]);

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

  const handleSort = (column) => {
    if (column === sortColumn) {
     
      userList.sort((a, b) => b[column].localeCompare(a[column]));
      setSortColumn(null);
    } else {
      userList.sort((a, b) => a[column].localeCompare(b[column]));
      setSortColumn(column);
    }
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
          {isDataAvailable ? (
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
          ):(
            <TableBody>
              <TableRow>
                <TableCell colSpan={4} align = "center">No Record Found</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddUser}
        style={{ position: 'fixed', bottom: '30px', left: '45%' , justifyContent : "center"}}
      >
      </Button>
      <Dialog open={deleteDialogOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Are you sure you want to delete?</DialogTitle>
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