import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { auth } from '../../firebase/clientApp';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { addDocument } from 'db/document/add-a-doc';
import { AuthContext } from 'context/AuthContext';

const ProductUploadModal = ({ setShow }) => {
  const productNameRef = useRef(null);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null);
  const [province, setProvince] = useState('');
  const [address, setAddress] = useState({
    name: '',
    code: null,
  });
  const handleAddressSelectionChanged = (e) => {
    const addressInfo = JSON.parse(e.target.value);
    setAddress(addressInfo);
  };
  const { render, setRender } = useContext(AuthContext);
  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/')
      .then((res) => res.json())
      .then((data) => setProvince(data));
  }, []);

  const handleUpload = () => {
    const productName = productNameRef.current?.value;
    const imgUrl = imageRef?.current.value;
    const description = descriptionRef.current?.value;
    if (!productName || !imgUrl || !address.code || !description) {
      return toast('Vui lòng nhập đầy đủ thông tin!');
    }
    const curData = {
      name: productName,
      imgUrl,
      address,
      description,
      isAvailable: true,
      ownerId: auth.currentUser?.uid || 'HBfzmc5jD2ehy4pwHlpmMztvZcX2',
      ownerName: auth.currentUser?.displayName || 'Sharub',
    };
    function toTimestamp(strDate) {
      var datum = Date.parse(strDate);
      return datum / 1000;
    }

    console.log(curData);
    const docID = toTimestamp(Date()).toString();
    addDocument('products', docID, curData);
    toast('Đăng sản phẩm thành công!');
    setShow(false);
    setRender(!render);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000] flex items-center justify-center bg-gray-300/75">
      <div className="absolute top-4 right-4" onClick={() => setShow(false)}>
        <FontAwesomeIcon icon={faXmark} cursor="pointer" className="text-3xl" />
      </div>
      <div className="bg-white p-4 rounded-md sm:w-80 md:w-96 flex flex-col gap-y-4">
        <div>
          <label className="sr-only" htmlFor="productName-input">
            Tên món đồ
          </label>
          <input
            className="block rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-main py-2 w-full border border-black"
            id="productName-input"
            name="productName"
            placeholder="Tên món đồ"
            required
            type="productName"
            ref={productNameRef}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="pickupAt-input">
            Khoảng cách
          </label>
          <select
            className="block w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
            onChange={handleAddressSelectionChanged}
          >
            <option value={JSON.stringify({ name: 'Địa chỉ', code: null })}>Địa chỉ</option>
            {province &&
              province.map((item) => (
                <option value={JSON.stringify({ name: item.name, code: item.code })} key={item.code}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label className="sr-only" htmlFor="image-input">
            Hình ảnh
          </label>
          <input
            className="block rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-main py-2 w-full border border-black"
            id="image-input"
            name="image"
            placeholder="Link hình ảnh"
            required
            type="url"
            ref={imageRef}
          />
        </div>

        <div>
          <label className="sr-only" htmlFor="description-input">
            Mô tả
          </label>
          <textarea
            className="block rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-main py-2 w-full border border-black"
            id="description-input"
            name="description"
            placeholder="Mô tả"
            required
            type="url"
            ref={descriptionRef}
          />
        </div>

        <button
          className="border-2 border-main w-full rounded-md mt-2 py-2 hover:bg-main hover:text-white text-main font-semibold"
          onClick={handleUpload}
        >
          Đăng
        </button>
      </div>
    </div>
  );
};

export default ProductUploadModal;
