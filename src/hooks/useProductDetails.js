import { useEffect, useState } from 'react';

const useProductDetails = (productId) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProduct(data);
      });
  }, [productId]);

  return [product, setProduct];
};

export default useProductDetails;
