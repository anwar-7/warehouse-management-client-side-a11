import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  const { _id, description, img, name, price, quantity, supplier } = product;
  const navigate = useNavigate();
  const handleUpdateStockById = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="product-container">
      <img src={img} alt="" />
      <div className="product-info">
        <h5>Name: {name}</h5>
        <h6>Price: ${price}</h6>
        <h6>Quantity: {quantity}</h6>
        <h6>Supplier: {supplier}</h6>
        <p>Description: {description.slice(0, 80)}...</p>
        <button
          onClick={() => handleUpdateStockById(_id)}
          className="product-button"
        >
          Update Stock
        </button>
      </div>
    </div>
  );
};

export default Product;
