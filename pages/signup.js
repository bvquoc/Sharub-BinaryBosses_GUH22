// import { AuthContext } from 'contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useContext, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
const SignUpPage = () => {
  //   const { registerUser } = useContext(AuthContext);
  const router = useRouter();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const handleSignUp = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    if (!email || !password || !confirmPassword) {
      return toast('Vui lòng nhập đầy đủ thông tin!');
    }
    console.log({
      email,
      password,
      confirmPassword,
    });
    if (!validateEmail(email)) {
      return toast('Email không hợp lệ!');
    }
    // const registerData = await registerUser({ email, password, confirmPassword });
    // if (!registerData.success) {
    //   toast(registerData.message);
    // } else {
    //   toast('Đăng kí thành công!');
    //   router.replace('/');
    // }
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
        <h1 className="text-3xl font-extrabold">Đăng kí</h1>
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
            <div className="text-center text-black/[0.6]">hoặc</div>
            <Link href="/login" passHref>
              <button className="w-full rounded-md border p-2 text-center sm:hover:border-gray-300 sm:hover:bg-gray-200">
                Đăng nhập
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUpPage;
