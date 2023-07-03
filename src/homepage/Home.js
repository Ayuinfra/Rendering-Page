import React from 'react';

import { AddCircleOutline, Edit, Delete } from '@mui/icons-material';
import { Button, Container, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

const Home = ({ users, handleAddUser, handleEditUser, handleDeleteUser }) => {
  const sortedUsers = users.slice().sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <Container  >
<>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle1" >
                <b>First Name</b>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" >
              <b>Last Name</b>
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle1" >
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
                  <IconButton onClick={() => handleDeleteUser(user.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
    </Container>
    
  );
};

export default Home;