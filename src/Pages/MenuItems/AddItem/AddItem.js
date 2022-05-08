import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useProductDetails from '../../../hooks/useProductDetails';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './AddItem.css';

const AddItem = () => {
  // const { productId } = useParams();
  // const [product, setProduct] = useProductDetails(productId);
  const [user] = useAuthState(auth);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const info = {
      email: user.email,
      // item: item.name,
      // itemId: itemId,
      name: event.target.name.value,
      supplier: event.target.supplier.value,
      price: event.target.price.value,
      img: event.target.img.value,
      stock: event.target.stock.value,
      shipping: event.target.shipping.value,
      quantity: event.target.quantity.value,
      description: event.target.description.value,
    };
    console.log(info);
    axios
      .post('https://protected-bastion-86504.herokuapp.com/products', info)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          //toast();
          event.target.reset();
        }
      });
  };

  return (
    <div className=" mb-5">
      <div className="w-75 mx-auto mt-2 bg-light ps-5 pe-5 pb-5 rounded-2">
        <h2 className="text-center fw-bold pt-3">Add Your Item</h2>
        <form onSubmit={handlePlaceOrder}>
          <input
            className="w-100 mb-2"
            type="text"
            value={user?.displayName}
            name="displayName"
            placeholder="name"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="w-100 mb-2"
            type="email"
            value={user?.email}
            name="email"
            placeholder="email"
            required
            readOnly
            disabled
          />
          <br />
          {/* <input className='w-100 mb-2' type="text" value={item.name} name="service" placeholder='service' required readOnly /> */}
          <br />
          <input
            className="w-100 mb-2"
            type="text"
            name="name"
            placeholder="Product Name"
            autoComplete="off"
            required
          />

          <br />
          <input
            className="w-100 mb-2"
            type="text"
            name="supplier"
            placeholder="supplier"
            autoComplete="off"
            required
          />
          <br />
          <input
            className="w-100 mb-2"
            type="text"
            name="price"
            placeholder="Price"
            required
          />
          <br />
          <input
            className="w-100 mb-2"
            type="text"
            name="stock"
            placeholder="Stock"
            required
          />
          <br />
          <input
            className="w-100 mb-2"
            type="text"
            name="shipping"
            placeholder="Shipping"
            required
          />
          <br />
          <input
            className="w-100 mb-2"
            type="text"
            name="quantity"
            placeholder="Quantity"
            required
          />
          <br />
          <textarea
            className="w-100 mb-2"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            cols="50"
            required
          />
          <br />
          <input
            className="w-100 mb-2"
            type="text"
            name="img"
            placeholder="Image URL"
            required
          />
          <br />
          <div className="d-flex justify-content-center align-items-center">
            <input
              className="btn btn-primary bg-primary bg-opacity-100 bg-gradient border-0"
              type="submit"
              value="Add Item"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
