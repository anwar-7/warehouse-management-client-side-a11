import { Button } from 'react-bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import './ManageInventory.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useProducts();

  // Delete Button
  const handelProductDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      console.log('Deleting Product', id);
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: 'DELETE',
      }).then((res) =>
        res.json().then((data) => {
          // console.log(data)
          if (data.deletedCount > 0) {
            alert('Data Deleted');
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
          }
        })
      );
    }
  };

  return (
    <div className="manage-inventory-container container">
      <PageTitle title={'Manage Inventory'}></PageTitle>
      <h1 className=" text-center fw-bold text-secondary mt-5">
        Manage Inventory
      </h1>
      <>
        <div className="mx-1">
          <div className="w-sm-50 ps-0">
            <h4 className="text-center mt-3 fw-bold">
              Product Length: ({products.length})
            </h4>

            <div className="mb-2 d-flex align-content-end justify-content-end">
              <Button
                onClick={() => navigate('/addInventoryItem')}
                className=" btn btn-success fw-bold d-flex align-items-center justify-content-center"
              >
                Add New Product
              </Button>
            </div>
            <div className="">
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Supplier</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Control</th>
                  </tr>
                </thead>
                {products.map((product) => (
                  <tbody className="bordercell" key={product._id}>
                    <tr>
                      <td>{product._id.slice(18, 30)}</td>
                      <td>{product.name}</td>
                      <td>{product.supplier}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <img height={40} width={40} src={product.img} alt="" />
                      </td>
                      <td>
                        <Button
                          className="btn btn-danger fw-light"
                          onClick={() => handelProductDelete(product._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ManageInventory;
