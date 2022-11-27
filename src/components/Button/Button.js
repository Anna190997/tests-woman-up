import React from 'react';
import './Button.scss';

const Button = ({ textButton, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {textButton}
    </button>
  );
};

export default Button;
