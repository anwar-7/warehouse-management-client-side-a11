import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './MyItems.css';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [userItem, setUserItem] = useState([]);

  useEffect(() => {
    const getUserItems = async () => {
      const email = user?.email;
      const url = `https://protected-bastion-86504.herokuapp.com/productsuser?email=${email}`;
      const { data } = await axios.get(url);
      setUserItem(data);
    };
    getUserItems();
  }, [user]);

  // Delete Button
  const handelUserItemDelete = (id) => {
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
            const remaining = userItem.filter((product) => product._id !== id);
            setUserItem(remaining);
          }
        })
      );
    }
  };

  return (
    <div className="manage-inventory-container container">
      <PageTitle title={'My Items'}></PageTitle>

      <>
        <div className="">
          <div className="">
            <h4 className="text-center mt-3 fw-bold">
              Your Items : ({userItem.length})
            </h4>
            <Table striped bordered hover size="sm" className="bordercell">
              <thead className="bordercell">
                <tr>
                  <th>ID</th>
                  <th>Item</th>
                  <th>User Email</th>
                  <th>Supplier</th>
                  <th>Quantity</th>
                  <th>Image</th>
                  <th>Control</th>
                </tr>
              </thead>
              {userItem.map((userItem) => (
                <tbody className="bordercell" key={userItem._id}>
                  <tr>
                    <td>{userItem._id.slice(18, 30)}</td>
                    <td>{userItem.name}</td>
                    <td>{userItem.email}</td>
                    <td>{userItem.supplier}</td>
                    <td>{userItem.quantity}</td>
                    <td>
                      <img height={40} width={40} src={userItem.img} alt="" />
                    </td>
                    <td>
                      <Button
                        className="btn btn-danger fw-light"
                        onClick={() => handelUserItemDelete(userItem._id)}
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

export default MyItems;
