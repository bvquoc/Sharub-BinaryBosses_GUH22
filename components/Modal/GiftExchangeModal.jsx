import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const GiftExchangeModal = ({ productData, setShow, render, setRender }) => {
  console.log(productData);

  const handleClick = () => {
    // Xu li di
    // khi thanh cong, ham nay duoc chay thi se thanh cong!
    setRender(!render);
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
