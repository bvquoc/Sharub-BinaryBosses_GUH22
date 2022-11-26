import Head from 'next/head';
import Image from 'next/image';
import ScreenLoad from '../components/Loading/ScreenLoad';
import TinyLoad from '../components/Loading/TinyLoad';
import Header from '~/components/layouts/Header';
import Product from '~/components/Product';
import { firestore } from '../firebase/clientApp';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../db/product';

// let productList = {};
// productList = Object.keys(productList).map((id) => ({
//   id,
//   ...productList[id],
// }));

const Home = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setProductList(res);
    });
  }, []);
  return (
    <>
      <Head>
        //! Edit title
        <title>Pending...</title>
      </Head>

      <Header />

      <div className="bg-gray-200 min-h-screen sm:p-[5%] md:px-[10%] md:py-[2rem] p-[2rem]">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4">
          {productList.map((product) => {
            // console.log(product);
            return <Product data={product} key={product._docId} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
