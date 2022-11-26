import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
