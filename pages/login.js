// import { AuthContext } from 'contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../firebase/clientApp.js';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { data } from 'autoprefixer';
const SignInPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  if (user) {
    console.log(user);
    router.push('/');
  }
  if (error) console.log(error.message, 'error');
  //   const { loginUser } = useContext(AuthContext)
  const handleSignIn = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log({ email, password });
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    };

    if (!email || !password) {
      return toast('Vui lòng nhập đầy đủ thông tin!');
    }

    if (!validateEmail(email)) {
      return toast('Email không hợp lệ!');
    }

    signInWithEmailAndPassword(email, password).then(() => {
      // setUserData(data)
    });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000] flex flex-col items-center justify-center gap-y-8 bg-white dark:bg-black">
        <Image
          alt="logo"
          src={'/static/favicons/android-icon-144x144.png'}
          width={100}
          height={100}
          priority
          className="rounded-md"
        />
        <h1 className="text-3xl font-extrabold">Đăng nhập</h1>
        <div
          className="flex flex-col gap-4"
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSignIn();
            }
          }}
        >
          <div>
            <label className="sr-only" htmlFor="email-input">
              Email
            </label>
            <input
              className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              id="email-input"
              name="email"
              placeholder="Email"
              required
              type="email"
              ref={emailRef}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password-input">
              Mật khẩu
            </label>
            <input
              className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              id="password-input"
              name="password"
              placeholder="Mật khẩu"
              required
              type="password"
              ref={passwordRef}
            />
          </div>
          <div>
            <button
              className="w-full rounded-md bg-primary-500 p-2 text-center text-white sm:hover:bg-primary-700"
              onClick={handleSignIn}
            >
              Đăng nhập
            </button>
            <div className="text-center text-black/[0.6]">hoặc</div>
            <Link href="/signup" passHref>
              <button className="w-full rounded-md border p-2 text-center sm:hover:border-gray-300 sm:hover:bg-gray-200">
                Đăng kí
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInPage;
