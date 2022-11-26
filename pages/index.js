import Head from 'next/head';
import Image from 'next/image';
import ScreenLoad from '../components/Loading/ScreenLoad';
import TinyLoad from '../components/Loading/TinyLoad';
import Header from '../components/layouts/Header';

const Home = () => {
  return (
    <>
      <Head>
        //! Edit title
        <title>Pending...</title>
      </Head>

      <Header />
      <div></div>
    </>
  );
};

export default Home;
