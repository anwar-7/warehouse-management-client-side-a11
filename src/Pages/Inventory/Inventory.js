import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './Inventory.css';
import { toast } from 'react-toastify';
// import Increment from './Increment';

const Inventory = () => {
  const { productId } = useParams();
  const [product, setProduct] = useProductDetails(productId);
  const [IncQuantity, setIncQuantity] = useState(0);
  console.log('p1', product.quantity);

  const handleSubmit = (event) => {
    // event.preventDefault();
    const decQuantity = parseInt(event.target.quantity.value);
    if (decQuantity > 0) {
      const quantity = parseInt(event.target.quantity.value) - 1;
      const newQuantity = { quantity };
      (async () => {
        const { data } = await axios.put(
          `http://localhost:5000/products/${productId}`,
          newQuantity
        );
        console.log('success', data);
        // alert('users added successfully!!!');
        // event.target.reset();
      })();
    } else {
      alert('You do not Have a Stock');
      return;
    }
    alert('product is Delivered Successfully!!!');
    event.target.reset();
    // send data to the server
    // const url = `http://localhost:5000/products/${productId}`;
    // fetch(url, {
    //   method: 'PUT',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(newQuantity),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('success', data);
    //     toast.success('product Delivered Successfully');
    //     event.target.reset();
    //   });
  };

  const handleIncreases = (event) => {
    const incQuantity = parseInt(event.target.value);
    console.log(incQuantity);
    setIncQuantity(incQuantity);
  };

  const handleSubmitIncreases = () => {
    const oldQuantity = parseInt(product.quantity);
    let quantity = oldQuantity + IncQuantity;
    if (quantity < 0) {
      // const quantity = parseInt(event.target.quantity.value);
      const newQuantity = { quantity };
      (async () => {
        const { data } = await axios.put(
          `http://localhost:5000/products/${productId}`,
          newQuantity
        );
        console.log('success', data);
        // alert('users added successfully!!!');
        // event.target.reset();
      })();
    } else {
      alert('Negative input is not allowed');
      return;
    }
  };

  return (
    <div className="inventory-container container">
      <PageTitle title={'Inventory'}></PageTitle>
      <h3>This is inventory page: {product._id}</h3>
      <h5>Product Name: {product.name}</h5>
      <div className=" d-flex">
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={product.quantity}
              name="quantity"
              readOnly
            />
            <div>
              <button>Deliver</button>
            </div>
          </form>
        </div>
        <div>
          <form onSubmit={handleSubmitIncreases}>
            <input
              type="number"
              onChange={handleIncreases}
              // value="quantity"
              name="quantity"
            />
            <div>
              <button>Increases</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
