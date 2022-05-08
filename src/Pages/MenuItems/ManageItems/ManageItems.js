import { Button } from 'react-bootstrap';
import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import './ManageItems.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const ManageItems = () => {
  const [products, setProducts] = useProducts();

  // Delete Button
  const handelProductDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      console.log('Deleting Product', id);
      const url = `https://protected-bastion-86504.herokuapp.com/products/${id}`;
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
      <PageTitle title={'Manage Items'}></PageTitle>
      <h1 className=" text-center fw-bold text-secondary mt-5">Manage Items</h1>
      <>
        <div className="">
          <div className="">
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
                  <th>Control</th>
                </tr>
              </thead>
              {products.map((product) => (
                <tbody className="bordercell" key={product._id}>
                  <tr>
                    <td>{product._id.slice(10, 30)}</td>
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
      </>
    </div>
  );
};
export default ManageItems;
