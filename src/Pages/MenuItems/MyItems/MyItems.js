import axios from 'axios';
import { useEffect, useState } from 'react';
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
      const url = `http://localhost:5000/productsuser?email=${email}`;
      const { data } = await axios.get(url);
      setUserItem(data);
    };
    getUserItems();
  }, [user]);

  return (
    <div className="w-50 mx-auto mt-5">
      <PageTitle title={'My Item'}></PageTitle>
      <h2>Your Items : ({userItem.length})</h2>
      {userItem.map((userItem) => (
        <div key={userItem._id}>
          <p>
            {userItem.email} : {userItem.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MyItems;
