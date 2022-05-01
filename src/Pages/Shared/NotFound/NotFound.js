import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container container">
      <PageTitle title={'404'}></PageTitle>
      <h1>404 Not Found...!</h1>
    </div>
  );
};

export default NotFound;
