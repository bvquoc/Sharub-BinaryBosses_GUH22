import { getDocument } from 'db/document/get-a-doc';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      getDocument('products', router.query.id).then((product) => {
        setProduct(product);
      });
    }
  }, [router.isReady]);
  console.log(product);
  return (
    <>
      <div className="md:mx-[10%] mx-[2rem] my-[2rem]"></div>
    </>
  );
};

export default ProductDetail;
