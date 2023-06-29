import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/system';

const HomePage = ({ users, handleAddUser, handleEditUser, handleDeleteUser }) => {
  return (
    <Container >
       <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
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
                <IconButton onClick={() => handleDeleteUser(user.id)}>
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
        style={{ position: 'fixed', bottom: '100px', left: '50%', transform: 'translateX(-50%)' }}
      >
        Add User
      </Button>
    </>
    </Container>
   
  );
};

export default HomePage;