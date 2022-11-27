import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateDocument } from 'db/document/update-a-doc';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const ProductModal = ({ productData, setProductData, reRender, setReRender }) => {
  const actionReceive = () => {
    if (!productData.isAvailable) {
      toast('Oops, muộn mất rồi! Chúc bạn may mắn lần sau.');
      return;
    }
    toast('Nhận thành công!');
    updateDocument('products', productData._docId, {
      ...productData,
      isAvailable: false,
    });
    setProductData(null);
    setReRender(!reRender);
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000] flex items-center justify-center bg-gray-300/75">
        <div className="absolute top-4 right-4" onClick={() => setProductData(null)}>
          <FontAwesomeIcon icon={faXmark} cursor="pointer" className="text-3xl" />
        </div>
        <div className="bg-white p-4 rounded-md sm:w-80 md:w-96">
          <div className="grid place-items-center">
            <img src={productData.imgUrl} width={400} height={400} loading="lazy" style={{ objectFit: 'cover' }} />
          </div>
          <h1 className="text-2xl font-semibold mt-2">{productData.name}</h1>
          <p className="text-sm opacity-70 mt-2">
            Đăng bởi <b>{productData?.ownerName}</b> | {productData.distance}
          </p>
          <p className="text-sm opacity-70 mt-2">Mô tả: {productData.description}</p>
          <button
            onClick={actionReceive}
            className="border-2 border-main w-full rounded-md mt-2 py-2 hover:bg-main hover:text-white text-main font-semibold"
          >
            Nhận
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
