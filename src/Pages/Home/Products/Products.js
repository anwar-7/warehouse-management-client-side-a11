import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
  const [user, loading, error] = useAuthState(auth);
  const [products, setProducts] = useProducts();

  useEffect(() => {
    if (loading) {
      return (
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
  }, [user, loading, products]);
  return (
    <div>
      <div className="products-container">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
