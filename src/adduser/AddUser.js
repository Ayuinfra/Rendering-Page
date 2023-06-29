import React, { Fragment, useState } from 'react';

const AddUserPage = ({ handleAddUserSubmit, handleGoBack }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddUserSubmit({ firstName, lastName, email });
  };

  return (
    <Fragment>
      <h2>Add User</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleGoBack}>Back</button>
      </form>
    </Fragment>
  );
};

export default AddUserPage;