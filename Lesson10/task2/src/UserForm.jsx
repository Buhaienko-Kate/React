import React from 'react';

const UserForm = ({ userData, handleChange }) => {
  
  const handleOnChange = event => {
    const { name, value } = event.target;
    
    handleChange({...userdata, [name]: value});
  }
  
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
        onChange={handleOnChange}
      />
    </form>
  );
};

export default UserForm;
