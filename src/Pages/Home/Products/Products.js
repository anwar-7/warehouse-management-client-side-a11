import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useProducts();

  return (
    <div>
      <h3>This is Products section</h3>
      <div className="products-container">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;