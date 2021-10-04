import React from 'react';

// class UserForm extends React.Component {
//   //   handleChange = event => {
//   //     this.props.handleChange(event);
//   //   };

//   render() {
//     return (
//       <form className="user-form">
//         <input
//           type="text"
//           name="firstName"
//           className="user-form__input"
//           value={this.props.userData.firstName}
//           onChange={this.props.handleChange}
//         />
//         <input
//           type="text"
//           name="lastName"
//           className="user-form__input"
//           value={this.props.userData.lastName}
//           onChange={this.props.handleChange}
//         />
//       </form>
//     );
//   }
// }
// export default UserForm;

const UserForm = ({ userData, handleChange }) => {
  // const handleOnChange = event => {
  //   const { name, value } = event.target;
  //   handleChange({
  //     ...userData,
  //     [name]: value,
  //   });
  // };
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={userData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={userData.lastName}
        onChange={handleChange}
      />
    </form>
  );
};

export default UserForm;
