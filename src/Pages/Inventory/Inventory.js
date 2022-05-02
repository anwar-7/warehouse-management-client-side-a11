import React from 'react';
import { useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Inventory.css';

const Inventory = () => {
  const { productId } = useParams();
  console.log(productId);
  return (
    <div className="inventory-container container">
      <PageTitle title={'Inventory'}></PageTitle>
      <h3>This is inventory page</h3>
    </div>
  );
};

export default Inventory;
