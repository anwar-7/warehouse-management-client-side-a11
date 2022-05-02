import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container container">
      <PageTitle title={'Home'}></PageTitle>
      <h1>This is Home</h1>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;
