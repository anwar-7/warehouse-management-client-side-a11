import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './AddInventoryItem.css';

const AddInventoryItem = () => {
  //Form Submit function post start
  const handelAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const supplier = e.target.supplier.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const stock = e.target.stock.value;
    const img = e.target.img.value;
    const shipping = e.target.shipping.value;
    const quantity = e.target.quantity.value;
    const product = {
      name,
      supplier,
      description,
      price,
      stock,
      img,
      shipping,
      quantity,
    };

    //post Request send data nto server
    fetch('https://protected-bastion-86504.herokuapp.com/products', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log('Success:', data);
        alert(`Product Name: ${product.name} inserted successfully`);
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className=" container">
      <PageTitle title={'Add Inventory Item'}></PageTitle>
      <h1 className=" text-center fw-bold text-secondary mt-3 ">
        Add Inventory Item
      </h1>
      <>
        <div className="my-3 p-5 bg-secondary bg-opacity-10 container">
          <h2 className="w-100 mx-auto text-center fw-bold">
            Add Product Details
          </h2>
          <form onSubmit={handelAddProduct}>
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Product Name</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              placeholder="Product Name"
              name="name"
              autoCapitalize="off"
              required
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Product Image URL</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              placeholder="Product Image URL Only"
              name="img"
              autoCapitalize="off"
              required
            />

            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Supplier</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              placeholder="Product Supplier"
              name="supplier"
              autoCapitalize="off"
              required
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">
              Product Description
            </p>
            <textarea
              className="w-100 mx-2 mb-2 d-flex"
              type="comment"
              placeholder="Product Description"
              rows="3"
              cols="50"
              name="description"
              autoCapitalize="off"
              required
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Price in USD $</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              placeholder="Product Price"
              name="price"
              autoCapitalize="off"
              required
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Stock</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              placeholder="Product Stock"
              name="stock"
              autoCapitalize="off"
              required
            />

            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Shipping</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              placeholder="Product Shipping"
              name="shipping"
              autoCapitalize="off"
              required
            />
            <p className="w-100 ms-2 mb-0 d-flex fw-bold">Quantity</p>
            <input
              className="w-100 mx-2 mb-2 d-flex"
              type="text"
              placeholder="Product Quantity"
              name="quantity"
              autoCapitalize="off"
              required
            />
            <div className="w-100 mx-auto h-25 d-flex justify-content-center">
              <button className="develope-button">Add New Inventory</button>
            </div>
          </form>
        </div>
      </>
    </div>
  );
};

export default AddInventoryItem;
