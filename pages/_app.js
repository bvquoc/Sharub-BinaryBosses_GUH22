import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from 'context/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthContextProvider>
        <ToastContainer position="bottom-right" autoClose={3000} />
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
