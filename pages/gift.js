import Head from 'next/head';
import Image from 'next/image';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase/clientApp';
import ScreenLoad from '../components/Loading/ScreenLoad';
import TinyLoad from '../components/Loading/TinyLoad';
import Header from '~/components/layouts/Header';
import NavBar from '~/components/layouts/NavBar';
import ProductGift from '~/components/ProductGift';
import { getAllGifts } from 'db/gift';

// let productList = {};
// productList = Object.keys(productList).map((id) => ({
//   id,
//   ...productList[id],
// }));

const Gift = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getAllGifts().then((res) => {
      setProductList(res);
    });
  }, []);
  return (
    <>
      <Head>
        //! Edit title
        <title>Đổi Quà</title>
      </Head>
      <div className="grid grid-cols-[auto_auto_auto] bg-[#eff3fd]">
        <NavBar />
        <div className="min-h-screen sm:p-[5%] md:px-[5%] md:py-[2rem] p-[2rem]">
          <div className="grid grid-cols-3 gap-x-4 mb-4">
            <div className="flex items-center gap-2 bg-white p-4 rounded-md">
              <Image src={'/img/Coins.png'} width={40} height={40} />
              <div>
                <p>GreenPoint</p>
                <span className="text-3xl">542</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-white p-4 rounded-md">
              <p>Bạn đã giúp</p>
              <span className="text-3xl">42 người</span>
            </div>
            <div className="flex flex-col gap-2 bg-white p-4 rounded-md">
              <p>Bạn đã chia sẻ</p>
              <span className="text-3xl">91 món đồ</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4">
            {productList.map((product) => {
              return <ProductGift data={product} key={product._docId} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gift;
