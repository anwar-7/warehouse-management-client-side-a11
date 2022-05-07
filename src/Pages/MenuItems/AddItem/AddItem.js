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
    axios.post('http://localhost:5000/products', info).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        //toast();
        event.target.reset();
      }
    });
  };

  return (
    <div className="">
      <div className="w-50 mx-auto mt-5">
        {/* <h2>Add Item: {item.length}</h2> */}
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
            placeholder="item name"
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
            placeholder="price"
            required
          />

          <br />
          <input
            className="w-100 mb-2"
            type="text"
            name="stock"
            placeholder="stock"
            required
          />

          <br />
          <input
            className="w-100 mb-2"
            type="text"
            name="shipping"
            placeholder="shipping"
            required
          />

          <br />
          <input
            className="w-100 mb-2"
            type="text"
            name="quantity"
            placeholder="quantity"
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
            placeholder="img"
            required
          />
          <br />
          <input className="btn btn-primary" type="submit" value="Add Item" />
        </form>
      </div>
    </div>

    // <div className=" container">
    //   <PageTitle title={'Add Item'}></PageTitle>
    //   <h1 className=" text-center fw-bold text-secondary mt-5 ">
    //     Order Your Product
    //   </h1>
    //   <>
    //     <div className="my-5 p-5 bg-secondary bg-opacity-10 container">
    //       <h2 className="w-100 mx-auto text-center fw-bold">
    //         Add Product Details
    //       </h2>
    //       <form onSubmit={handelAddUserProduct}>
    //         <p className="w-100 ms-2 mb-0 d-flex fw-bold">User Name</p>
    //         <input
    //           className="w-100 mx-2 mb-2 d-flex"
    //           type="text"
    //           placeholder="User Name"
    //           name="user"
    //           value={user?.displayName}
    //           autoCapitalize="off"
    //           readOnly
    //         />
    //         <p className="w-100 ms-2 mb-0 d-flex fw-bold">User Email</p>
    //         <input
    //           className="w-100 mx-2 mb-2 d-flex"
    //           type="email"
    //           value={user?.email}
    //           name="email"
    //           autoCapitalize="off"
    //           readOnly
    //         />
    //         <p className="w-100 ms-2 mb-0 d-flex fw-bold">Product Name</p>
    //         <input
    //           className="w-100 mx-2 mb-2 d-flex"
    //           type="text"
    //           placeholder="Product Name"
    //           value={product.name}
    //           name="name"
    //           autoCapitalize="off"
    //           readOnly
    //         />
    //         <p className="w-100 ms-2 mb-0 d-flex fw-bold">Product Image</p>
    //         <img
    //           // height={80}
    //           // width={40}
    //           className="w-25 mx-auto d-flex"
    //           src={product.img}
    //           alt="product"
    //         />
    //         <p className="w-100 ms-2 mb-0 d-flex fw-bold">Category</p>
    //         <input
    //           className="w-100 mx-2 mb-2 d-flex"
    //           type="text"
    //           placeholder="Product Category"
    //           value={product.category}
    //           name="category"
    //           autoCapitalize="off"
    //           readOnly
    //         />
    //         <p className="w-100 ms-2 mb-0 d-flex fw-bold">Supplier</p>
    //         <input
    //           className="w-100 mx-2 mb-2 d-flex"
    //           type="text"
    //           placeholder="Product Supplier"
    //           value={product.supplier}
    //           name="supplier"
    //           autoCapitalize="off"
    //           readOnly
    //         />

    //         <p className="w-100 ms-2 mb-0 d-flex fw-bold">Price in USD $</p>
    //         <input
    //           className="w-100 mx-2 mb-2 d-flex"
    //           type="text"
    //           placeholder="Product Price"
    //           value={product.price}
    //           name="price"
    //           autoCapitalize="off"
    //           readOnly
    //         />

    //         <p className="w-100 ms-2 mb-0 d-flex fw-bold">User Phone Number</p>
    //         <input
    //           className="w-100 mx-2 mb-2 d-flex"
    //           type="tel"
    //           placeholder="Phone"
    //           name="phone"
    //           autoCapitalize="off"
    //           required
    //         />
    //         <p className="w-100 ms-2 mb-0 d-flex fw-bold">User Address</p>
    //         <input
    //           className="w-100 mx-2 mb-2 d-flex"
    //           type="text"
    //           placeholder="Address"
    //           name="address"
    //           autoCapitalize="off"
    //           required
    //         />
    //         <div className="w-100 mx-auto h-25 d-flex justify-content-center">
    //           <button className="develope-button mt-2">Order</button>
    //         </div>
    //       </form>
    //     </div>
    //   </>
    // </div>
  );
};

export default AddItem;
