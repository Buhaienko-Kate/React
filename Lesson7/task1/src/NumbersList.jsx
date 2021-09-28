import React from 'react';

const NumbersList = ({ numbers }) => {
  //   const numberElements = numbers.map(num => <li>{num}</li>);

  //     return <ul>{numberElements}</ul>;

  return (
    <ul>
      {numbers.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
