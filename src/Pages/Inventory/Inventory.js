import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

  // fore navigation
  const navigate = useNavigate();
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
      alert('Your Stock Is sold out');
      return;
    }
    alert('product is Delivered Successfully!!!');
    event.target.reset();
  };

  const handleIncreases = (event) => {
    const incQuantity = parseInt(event.target.value);
    if (incQuantity < 0) {
      alert('Negative input is not allowed');
    } else {
      console.log(incQuantity);
      setIncQuantity(incQuantity);
    }
  };

  const handleSubmitIncreases = (event) => {
    // event.preventDefault();
    const oldQuantity = parseInt(product.quantity);
    const quantity = oldQuantity + IncQuantity;
    if (quantity) {
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
    }
  };

  return (
    <div className="inventory-container container mb-5">
      <PageTitle title={'Inventory'}></PageTitle>
      <div className="row mx-1 mt-5 flex-sm-wrap">
        <div className="col-7 ps-0 bg-secondary bg-opacity-10">
          <h3 className="w-100 mx-auto text-center">Product Details</h3>
          <form onSubmit={handleSubmit}>
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Product Name</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={product.name}
              name="name"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Product ID</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={product._id}
              name="productId"
              readOnly
              autoCapitalize="off"
            />
            <img
              // height={40}
              // width={40}
              className="w-25 mx-auto d-flex"
              src={product.img}
              alt="product"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Category</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={product.category}
              name="category"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Supplier</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={product.supplier}
              name="supplier"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">
              Product Description
            </p>
            <textarea
              className="w-100 mx-2 mb-2 d-flex"
              type="comment"
              value={product.description}
              name="description"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Price in USD $</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={product.price}
              name="price"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Stock</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={product.stock}
              name="stock"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Ratings</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={product.ratings}
              name="ratings"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Ratings Count</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={product.ratingsCount}
              name="ratingsCount"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Shipping</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={product.shipping}
              name="shipping"
              readOnly
              autoCapitalize="off"
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Quantity</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              value={product.quantity}
              name="quantity"
              readOnly
              autoCapitalize="off"
            />
            <div className="w-100 mx-auto h-25 d-flex justify-content-center">
              <button className="develope-button">Deliver</button>
            </div>
          </form>
        </div>
        <div className="col-5">
          <div className=" bg-info bg-opacity-25 p-5">
            <form onSubmit={handleSubmitIncreases}>
              <h3 className="w-100 mx-auto text-center">Increases Quantity</h3>
              <input
                // style={{ maxWidth: '150px' }}
                className="w-100 mx-auto mb-2"
                placeholder="Quantity"
                type="number"
                onChange={handleIncreases}
                // value="quantity"
                name="quantity"
              />
              <div className="w-100 mx-auto h-25 d-flex justify-content-center">
                <button className="increases-button">Increases</button>
              </div>
            </form>
          </div>
          <div className=" mt-5 bg-primary bg-opacity-50 p-5 d-flex justify-content-center">
            <button
              onClick={() => navigate('/manageInventory')}
              className="manage-inventory-button"
            >
              Manage Inventory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
