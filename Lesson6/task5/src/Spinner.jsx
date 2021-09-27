import React from 'react';

const Spinner = ({ size }) => {
  const style = {
    with: `${size}px`,
    height: `${size}px`,
  };
  return <div style={style} className="spinner"></div>;
};

export default Spinner;
