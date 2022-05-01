import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container container">
      <PageTitle title={'Home'}></PageTitle>
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
