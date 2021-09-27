import React from 'react';
import UserGreeting from './UserGreeting.jsx';
import GuestGreeting from './GuestGreeting.jsx';

const Greeting = props => {
  console.log(props);
  // const {isLoggedIn} = props , либо в props ({ isLoggedIn })
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
