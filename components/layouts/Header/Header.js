import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase/clientApp';
import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import images from 'assets/images';
import { HomeIcon } from 'components/Icons';

const cx = classNames.bind(styles);

function Header() {
  const { userData, setUserData } = useContext(AuthContext);

  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserData(null);
        router.replace('/login');
        console.log('signed out!');
      })
      .catch((err) => {
        return toast(err.message);
      });
  };
  return (
    <header className={`${cx('wrapper')} sm:px-[5%] md:px-[10%] p-2 bg-[#F7F8F9] fixed top-0 left-0 right-0`}>
      <div className={cx('inner')}>
        <div className={cx('left-wrapper')}>
          <Link href="/">
            <img className={cx('logo')} src={images.logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/login" className="text-slate-500">
            Đăng nhập
          </Link>
          <Link href="/signup" className="bg-main px-4 py-1 rounded-md">
            Đăng kí
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
