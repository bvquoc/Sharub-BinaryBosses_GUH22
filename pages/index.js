import Head from 'next/head';
import Image from 'next/image';
import ScreenLoad from '../components/Loading/ScreenLoad';
import TinyLoad from '../components/Loading/TinyLoad';
import Header from '~/components/layouts/Header';
import Product from '~/components/Product';

let productList = {
  product1abcxyz: {
    name: 'Quan ao cu',
    isAvailable: true,
    owner: 'Kiệt',
    ownerId: '598uor347wej',
    description: 'Có ít quấn áo cũ dư không mặc đến',
    pickupLocation: 'HỒ Chí Minh',
    pickupLocationCode: 1,
    pickupTime: Date(),
  },
  product2xyzabc: {
    name: 'Banh mi',
    isAvailable: false,
    owner: 'Nguyễn Bắc',
    ownerId: 'jfkejkfneufhnsk',
    description: 'Bánh mì mua nhiều quá không ăn hết',
    pickupLocation: 'Đăk Nông',
    pickupLocationCode: 2,
    pickupTime: Date(),
  },
};

productList = Object.keys(productList).map((id) => ({
  id,
  ...productList[id],
}));

const Home = () => {
  return (
    <>
      <Head>
        //! Edit title
        <title>Pending...</title>
      </Head>

      <Header />

      <div className="bg-gray-200 min-h-screen">
        {productList.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
