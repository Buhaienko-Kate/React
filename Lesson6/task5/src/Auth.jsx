import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      showSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({
      showSpinner: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        showSpinner: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    const loginBtn = !this.state.isLoggedIn && <Login onLogin={this.handleLogin} />;
    // console.log(this.state.isLoggedIn);
    const button = this.state.isLoggedIn ? <Logout onLogout={this.handleLogout} /> : loginBtn;
    // if (this.state.isLoggedIn) {
    //   return <Logout onLogout={this.handleLogout} />;
    // } else {
    //   loginBtn;
    // }

    if (this.state.showSpinner) {
      return <Spinner size={80} />;
    }
    return <>{button}</>;
  }
}

export default Auth;
