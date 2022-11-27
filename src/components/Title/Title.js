import React from 'react';
import './Title.scss';

const Title = ({ title }) => {
  return (
    <div className="title_wrapper">
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default Title;
