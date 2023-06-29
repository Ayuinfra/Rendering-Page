import React, { Fragment, useState } from 'react';

const EditUserPage = ({ user, handleUpdateUser, handleGoBack }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [isFormDirty, setIsFormDirty] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser(user.id, { firstName, lastName, email });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (user[name] !== value) {
      setIsFormDirty(true);
    } else {
      setIsFormDirty(false);
    }

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <h2>Edit User</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" value={firstName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={lastName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit" disabled={!isFormDirty}>Update</button>
        <button type="button" onClick={handleGoBack}>Back</button>
      </form>
    </Fragment>
  );
};

export default EditUserPage;