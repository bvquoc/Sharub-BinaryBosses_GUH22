import Head from 'next/head';
import Image from 'next/image';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';
import { useContext, useEffect, useRef, useState } from 'react';
import { getAllProducts } from '../db/product';
import { firestore } from '../firebase/clientApp';
import ScreenLoad from '../components/Loading/ScreenLoad';
import TinyLoad from '../components/Loading/TinyLoad';
import Header from '~/components/layouts/Header';
import NavBar from '~/components/layouts/NavBar';
import Product from '~/components/Product';
import { AuthContext } from 'context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import ProductModal from 'components/Modal/ProductModal';

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

  const searchRef = useRef(null);

  const ranking = [
    {
      top: 1,
      imgSrc: '/img/purpleHug.png',
      name: 'Bùi Vĩ Quốc',
    },
    {
      top: 2,
      imgSrc: '/img/GreenHug.png',
      name: 'Lê Tuấn Anh',
    },
    {
      top: 3,
      imgSrc: '/img/GreenHug.png',
      name: 'Lê Thị Liên',
    },
    {
      top: 4,
      imgSrc: '/img/GreenHug.png',
      name: 'Nguyễn Xuân Bắc',
    },
    {
      top: 5,
      imgSrc: '/img/GreenHug.png',
      name: 'Trần Tuấn Kiệt',
    },
  ];

  const [productData, setProductData] = useState(null);

  const handleClickProduct = (data) => {
    setProductData(data);
  };

  return (
    <>
      <Head>
        //! Edit title
        <title>Sharub</title>
      </Head>
      <div className="grid grid-cols-[auto_auto_auto] bg-[#eff3fd]">
        <NavBar />
        <div className="min-h-screen p-[2rem]">
          <div className="flex justify-between mb-4 items-center">
            <div>
              <h2 className="text-2xl font-bold">Xin chào!</h2>
              <p className="text-slate-500">Chúc bạn một ngày tốt lành!</p>
            </div>
            <div>
              <label className="sr-only" htmlFor="search-input">
                Tìm kiếm
              </label>
              <input
                className="block lg:w-96 md:w-52 w-20 rounded-md px-4 ountline-none border-none focus:border-transparent focus:outline-none focus:ring-2 focus:ring-main dark:bg-black"
                id="search-input"
                name="search"
                placeholder="Tìm kiếm"
                required
                type="text"
                ref={searchRef}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <button className="bg-white py-2 px-4 rounded-md">
                <FontAwesomeIcon icon={faBell} />
              </button>
              <Image
                src={'/img/letuananh.jpg'}
                alt="avatar"
                width={40}
                height={40}
                quality={100}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-4">
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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 grid-cols-1 gap-4 mt-8">
            {productList.map((product) => {
              // console.log(product);
              if (product.isAvailable)
                return <Product data={product} key={product._docId} onClick={handleClickProduct} />;
            })}
          </div>
        </div>
        <div className="bg-white mt-[2rem] mr-[2rem] rounded-md p-4 h-max">
          <h2 className="text-3xl font-semibold">Top Sharuber</h2>
          {ranking.map((rank) => (
            <RankCard {...rank} key={rank.name} />
          ))}
          <p className="text-sm text-center text-slate-400 pb-4">Thứ hạng hiện tại của bạn: 89</p>
        </div>
      </div>
      {productData && <ProductModal productData={productData} setProductData={setProductData} />}
    </>
  );
};

export default Home;

const RankCard = (props) => {
  return (
    <>
      <div
        className={`flex items-center gap-2 ${props.top === 1 ? 'bg-[#f1ecff]' : 'bg-[#d7faf0]'} p-4 rounded-md my-2`}
      >
        <Image src={props.imgSrc} width={60} height={60} {...props} />
        <div>
          <p className="text-sm">Top {props.top}</p>
          <span className="text-md font-semibold">{props.name}</span>
        </div>
      </div>
    </>
  );
};
