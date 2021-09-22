import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={0} interval={100} />
      <Counter start={10} interval={200} />
    </>
  );
};
export default App;
