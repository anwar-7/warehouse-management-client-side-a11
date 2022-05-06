import { Button } from 'react-bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import './ManageInventory.css';

const ManageInventory = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="manage-inventory-container container">
      <h1 className=" text-center fw-bold text-secondary mt-5">
        Manage Inventory
      </h1>
      <>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <h4 className="text-center mt-3 fw-bold">
              Product Length: ({products.length})
            </h4>
            <Table striped bordered hover size="sm" className="bordercell">
              <thead className="bordercell">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Supplier</th>
                  <th>Quantity</th>
                  <th>Image</th>
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
                        //   onClick={() => handeluserdelete(product._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>

          <div className="col mb-5">
            <div className=" mt-5 bg-primary bg-opacity-50 p-5 d-flex justify-content-center">
              <Button
                //   onClick={() => navigate('/manageInventory')}
                className=" btn btn-success fw-bold"
              >
                Add New Product
              </Button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ManageInventory;
