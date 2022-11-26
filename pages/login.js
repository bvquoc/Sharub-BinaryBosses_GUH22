// import { AuthContext } from 'contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../firebase/clientApp.js';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import images from '~/assets/images';
import { addDocument } from 'db/document/add-a-doc.js';
import Header from 'components/layouts/Header/Header.js';
import { AuthContext } from 'context/AuthContext.js';
import Head from 'next/head.js';
const SignUpPage = () => {
  //   const { registerUser } = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  if (user) {
    console.log(user);
    router.push('/');
  }
  if (error) console.log(error.message, 'error');

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
      // setUserData(user);
    });
  };

  return (
    <>
      <Head>
        <title>Đăng nhập</title>
      </Head>
      <Header />
      <div className="bg-[#F7F8F9] grid md:grid-cols-2 grid-cols-1 min-h-screen place-items-center">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-3xl font-bold">Chia sẻ</h2>
          <h2 className="text-3xl font-bold">để tiết kiệm</h2>
          <p className="font-semibold mb-4">Nền tảng cho và nhận những món đồ thừa đầu tiên tại Việt Nam</p>
          <Image src={'/img/signup.jpg'} width={500} height={500} alt="Share" />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-8 bg-white p-8 rounded-md dark:bg-black shadow-lg">
          {/* <Image alt="logo" src={images.logo} width={100} height={100} priority className="rounded-md" /> */}
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
                className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-main dark:bg-black"
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
                className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-main dark:bg-black"
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
                className="w-full rounded-md bg-main p-2 text-center text-white sm:hover:bg-primary-700"
                onClick={handleSignIn}
              >
                Đăng nhập
              </button>
              <p className="text-center mt-2">
                Bạn chưa có tài khoản?{' '}
                <Link href="/signup" className="text-main">
                  Đăng kí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;
