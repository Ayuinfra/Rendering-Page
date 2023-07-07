import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Home from './InnerHome1';
import AddUser from './AddUser1';
import EditUser from './Edit1';

const App = () => {
  const [page, setPage] = useState('home');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleAddUser = (newUser) => {
    const updatedUsers = [...users, { ...newUser, id: uuidv4() }];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleEditUser = (userId) => {
    setPage('edit');
    localStorage.setItem('editUserId', userId);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setPage('home');
    localStorage.removeItem('editUserId');
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleGoHome = () => {
    setPage('home');
    localStorage.removeItem('editUserId');
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <Home
            users={users}
            handleAddUser={() => setPage('add')}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
          />
        );
      case 'add':
        return (
          <AddUser handleAddUser={handleAddUser} handleGoHome={handleGoHome} />
        );
      case 'edit':
        const editUserId = localStorage.getItem('editUserId');
        const userToEdit = users.find((user) => user.id === editUserId);
        return (
          <EditUser
            user={userToEdit}
            handleUpdateUser={handleUpdateUser}
            handleGoHome={handleGoHome}
          />
        );
      default:
        return (
          <Home
            users={users}
            handleAddUser={() => setPage('add')}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
          />
        );
    }
  };

  return <>{renderPage()}</>;
};

export default App;

