import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container container">
      <PageTitle title={'Home'}></PageTitle>
      <h1>This is Home</h1>
      <Banner></Banner>
      <Products></Products>
      <div className="p-5 d-flex justify-content-center">
        <button
          onClick={() => navigate('/manageInventory')}
          className="manage-inventory-button"
        >
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default Home;
