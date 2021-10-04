import React, { Component } from 'react';
import ShoppingCard from './ShoppingCard.jsx';
import Profile from './Profile.jsx';

class App extends React.Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Ford',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData } = this.state;
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName}`}</h1>
        <main className="content">
          <ShoppingCard userData={this.state.userData} />
          <Profile userData={this.state.userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;