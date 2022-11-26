import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from 'context/AuthContext';
import Header from 'components/layouts/Header';
import NavBar from 'components/layouts/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <ToastContainer position="bottom-right" autoClose={3000} />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
