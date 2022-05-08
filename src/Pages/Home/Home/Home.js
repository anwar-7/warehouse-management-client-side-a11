import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Products from '../Products/Products';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container container">
      <PageTitle title={'Home'}></PageTitle>

      {/* this is banner */}
      <Banner></Banner>
      {/* product section */}
      <h3 style={{ color: '#112B3C' }} className="text-center fw-bold mt-5">
        Products section
      </h3>
      <Products></Products>
      {/* manage inventory button */}
      <div className="p-3 d-flex justify-content-center">
        <button
          onClick={() => navigate('/manageInventory')}
          className="manage-inventory-button"
        >
          Manage Inventory
        </button>
      </div>
      {/* review section */}
      <Review></Review>
      {/* information section */}
      <h3 style={{ color: '#112B3C' }} className="text-center fw-bold mt-4">
        Information
      </h3>
      <Info></Info>
    </div>
  );
};

export default Home;
