// import { AuthContext } from 'contexts/AuthContext';
import Header from 'components/layouts/Header/Header.js';
import { addDocument } from 'db/document/add-a-doc.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Head from 'next/head.js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../firebase/clientApp.js';

const SignInPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const fullNameRef = useRef(null);
  const [address, setAddress] = useState({
    name: '',
    code: '',
  });
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const [province, setProvince] = useState('');
  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/')
      .then((res) => res.json())
      .then((data) => setProvince(data));
  }, []);

  const router = useRouter();
  const handleSignUp = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const name = fullNameRef.current?.value;
    if (!email || !password || !confirmPassword || !name || !address.code) {
      return toast('Vui lòng nhập đầy đủ thông tin!');
    }
    if (password !== confirmPassword) {
      return toast('Mật khẩu không khớp!');
    }
    if (!validateEmail(email)) {
      return toast('Email không hợp lệ!');
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        addDocument('users', auth.currentUser.uid, {
          email,
          password,
          address,
          name,
        });
        router.push('/');
        toast('Đăng kí thành công!');
      })
      .catch((err) => toast(err.message));
  };
  const handleAddressSelectionChanged = (e) => {
    const addressInfo = JSON.parse(e.target.value);
    setAddress(addressInfo);
  };

  return (
    <>
      <Head>
        <title>Đăng kí</title>
      </Head>
      <Header />
      <div className=" min-h-screen flex flex-col items-center justify-center gap-y-8 bg-[#F7f8f9] p-8 rounded-lg">
        {/* <Image alt="logo" src={images.logo} width={50} height={50} priority className="rounded-md" /> */}
        <h2 className="text-3xl font-bold text-center">
          Tham gia cộng đồng <br /> Sharub ngay
        </h2>
        <h1 className="text-md text-slate-500 font-semibold">Đăng kí tài khoản</h1>
        <div
          className="flex flex-col gap-4"
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleSignUp();
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
            <label className="sr-only" htmlFor="name-input">
              Tên
            </label>
            <input
              className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              id="name-input"
              name="name"
              placeholder="Tên đầy đủ"
              required
              type="text"
              ref={fullNameRef}
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="address-input">
              Địa chỉ
            </label>
            <select
              className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              onChange={handleAddressSelectionChanged}
            >
              <option value={JSON.stringify({ name: 'Địa chỉ', code: null })}>Địa chỉ</option>
              {province &&
                province.map((item) => (
                  <option value={JSON.stringify({ name: item.name, code: item.code })} key={item.code}>
                    {item.name}
                  </option>
                ))}
            </select>
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
            <label className="sr-only" htmlFor="confirm-password-input">
              Mật khẩu
            </label>
            <input
              className="block w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
              id="confirm-password-input"
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              required
              type="password"
              ref={confirmPasswordRef}
            />
          </div>
          <div>
            <button
              className="w-full rounded-md bg-primary-500 p-2 text-center text-white sm:hover:bg-primary-700"
              onClick={handleSignUp}
            >
              Đăng kí
            </button>
            <p className="text-center mt-2">
              Bạn đã có tài khoản?{' '}
              <Link href="/login" className="text-main">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInPage;
