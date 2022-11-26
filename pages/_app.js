import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from 'context/AuthContext';
import Header from 'components/layouts/Header';
import NavBar from 'components/layouts/NavBar';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '~/firebase/clientApp';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
      } else {
        console.log(router.asPath);
        if (router.asPath === '/signup') return;
        router.replace('/login');
      }
    });
  }, []);
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
