import React from 'react';
import Greeting from './Greeting.jsx';

const App = () => {
  return <Greeting firstName="John" lastName="Doe" birthDate={new Date('2000-01-01')} />;
};
export default App;
