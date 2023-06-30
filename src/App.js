import React, { useState } from 'react';
import HomePage from './homepage/Home';
import AddUserPage from './adduser/AddUser';
import EditUserPage from './editpage/Edit';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, firstName: 'Prajwal', lastName: 'Jain', email: 'pari@gmail.com' },
    { id: 2, firstName: 'Vishal', lastName: 'Chauhan', email: 'vishu@gmail.com' },
  ]);
  const [currentPage, setCurrentPage] = useState('home');
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = () => {
    setCurrentPage('addUser');
  };

  const handleEditUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    setEditingUser(user);
    setCurrentPage('editUser');
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((u) => u.id !== userId);
    setUsers(updatedUsers);
  };

  const handleAddUserSubmit = (newUser) => {
    const updatedUsers = [...users, { id: Date.now(), ...newUser }];
    setUsers(updatedUsers);
    setCurrentPage('home');
  };

  const handleUpdateUser = (userId, updatedUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    setUsers(updatedUsers);
    setCurrentPage('home');
    setEditingUser(null);
  };

  const handleGoBack = () => {
    setCurrentPage('home');
    setEditingUser(null);
  };

  return (
    <>
      {currentPage === 'home' && (
        <HomePage
          users={users}
          handleAddUser={handleAddUser}
          handleEditUser={handleEditUser}
          handleDeleteUser={handleDeleteUser}
        />
      )}
      {currentPage === 'addUser' && (
        <AddUserPage handleAddUserSubmit={handleAddUserSubmit} handleGoBack={handleGoBack} />
      )}
      {currentPage === 'editUser' && (
        <EditUserPage
          user={editingUser}
          handleUpdateUser={handleUpdateUser}
          handleGoBack={handleGoBack}
        />
      )}
    </>
  );
};

export default App;