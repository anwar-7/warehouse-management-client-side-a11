import axios from 'axios';
import { useEffect, useState } from 'react';

const useProductDetails = (productId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://protected-bastion-86504.herokuapp.com/products/${productId}`
      );
      // console.log(data);
      setProduct(data);
    })();
  }, [productId]);

  return [product, setProduct];
};

export default useProductDetails;
