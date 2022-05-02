import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Inventory.css';

const Inventory = () => {
  const { productId } = useParams();
  const [product, setProduct] = useProductDetails(productId);
  console.log(productId, product);
  return (
    <div className="inventory-container container">
      <PageTitle title={'Inventory'}></PageTitle>
      <h3>This is inventory page: {product.name}</h3>
    </div>
  );
};

export default Inventory;
