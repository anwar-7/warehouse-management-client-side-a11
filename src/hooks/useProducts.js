import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // iifi
    (async () => {
      const { data } = await axios.get(`http://localhost:5000/products`);
      //   console.log(data);
      setProducts(data);
    })();
  }, []);
  return [products, setProducts];
};

export default useProducts;
