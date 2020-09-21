import React from 'react';

const Button = ({ label, ...otherProps }) => {
  return <button {...otherProps}>{label}</button>;
};

export default Button;
