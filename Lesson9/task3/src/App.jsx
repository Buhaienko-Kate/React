import React, { Component } from 'react';
import UserForm from './UserForm.jsx';

class App extends Component {
  createUser = formData => {
    e.preventDefault();
    console.log(formData);
  };
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
