import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import React from 'react';
import { updateDocument } from 'db/document/update-a-doc';

const GiftExchangeModal = ({ productData, setShow, render, setRender }) => {
  const handleClick = () => {
    const newData = {
      ...productData,
      amount: productData.amount - 1,
    };
    toast('Nhận quà thành công!');
    updateDocument('gifts', productData._docId, newData);
    setRender(!render);
    setShow(null);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000] flex items-center justify-center bg-gray-300/75">
        <div className="absolute top-4 right-4" onClick={() => setShow(null)}>
          <FontAwesomeIcon icon={faXmark} cursor="pointer" className="text-3xl" />
        </div>
        <div className="bg-white p-4 rounded-md sm:w-80 md:w-96">
          <div className="grid place-items-center">
            <img src={productData.imgUrl} width={400} height={400} loading="lazy" style={{ objectFit: 'cover' }} />
          </div>
          <p className="font-semibold text-xl">{productData.name}</p>
          <p className="text-sm opacity-50">Còn lại: {productData.amount}</p>
          <button
            className="border-2 border-main w-full rounded-md mt-2 py-2 hover:bg-main hover:text-white text-main font-semibold"
            onClick={handleClick}
          >
            Nhận
          </button>
        </div>
      </div>
    </>
  );
};

export default GiftExchangeModal;
