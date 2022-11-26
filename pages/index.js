import Head from 'next/head';
import Image from 'next/image';
import ScreenLoad from '../components/Loading/ScreenLoad';
import TinyLoad from '../components/Loading/TinyLoad';
import Header from '../components/layouts/Header';
import CardItem from 'components/Item/CardItem';

const Home = () => {
  const testData = [
    {
      _nameProduct: 'Cu chuoi',
      _isAvailable: true,
      _productOwner: 'tuankietcoder',
      _Description: 'Day la mot cai cu chuoi ne',
      _pickupLocation: 'zzz',
      _pickupTime: '2022-11-26',
    },
    {
      _nameProduct: 'Cu kieu',
      _isAvailable: false,
      _productOwner: '3ads465sa4d6asad5s', //user id
      _Description: 'Day la mot cai cu kieu ne',
      _pickupLocation: 'zzzAz',
      _pickupTime: '2022-11-26',
    },
  ];
  return (
    <>
      <Head>
        //! Edit title
        <title>Pending...</title>
      </Head>

      <Header />

      <div className=" bg-[#f0f0f0] min-h-screen">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4 md:mx-[10%] mx-[2rem] sm:py-[2rem] py-[1rem]">
          {testData.map((product) => (
            <CardItem {...product} key={product._nameProduct} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
