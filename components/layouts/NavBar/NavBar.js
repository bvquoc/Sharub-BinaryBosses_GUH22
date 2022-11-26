import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './NavBar.module.scss';
import { CalendarIcon, HomeIcon, LibraryIcon, PointIcon, SettingIcon } from 'components/Icons';
import images from 'assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faCloudArrowUp, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase/clientApp';
import { useContext, useState } from 'react';
import { AuthContext } from 'context/AuthContext';
import ProductUploadModal from 'components/Modal/ProductUploadModal';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const ROUTERS_PATH = [
  {
    path: '/',
    title: 'Trang chủ',
    icon: <HomeIcon />,
  },
  {
    path: '/gift',
    title: 'Đổi Quà',
    icon: <PointIcon />,
  },
  {
    path: '/library',
    title: 'Thư viện',
    icon: <LibraryIcon />,
  },
  {
    path: 'aboutus',
    title: 'Về chúng tôi',
    icon: <FontAwesomeIcon className={cx('icon')} icon={faAddressCard} />,
  },
];

function NavBar() {
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.replace(href);
    console.log(href);
  };

  const classes = (href) =>
    cx('item', {
      active: router.asPath === href,
    });

  const { setUserData } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.replace('/login');
      setUserData(null);
    });
  };

  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className="flex items-center">
            <Link className={cx('logo')} href="/">
              <img className={cx('logo-icon')} src={images.logo} alt="logo" />
              <h1 className="ml-4 text-2xl font-bold">Sharub</h1>
            </Link>
          </div>

          {/* <span className={cx('line')}></span> */}
          <hr />
          <div className="flex justify-between flex-col">
            <div className={cx('menu')}>
              {ROUTERS_PATH.map((item, index) => {
                return (
                  <Link
                    className={classes(item.path)}
                    href={item.path}
                    key={index}
                    onClick={(e) => handleClick(e, item.path)}
                  >
                    {item.icon}
                    <span className={cx('title')}>{item.title}</span>
                  </Link>
                );
              })}
              <button
                className="mt-4 rounded-md w-full sm:transform hover:scale-[1.03] transition-all bg-main py-2 text-white"
                onClick={() => setIsShow(true)}
              >
                <FontAwesomeIcon icon={faCloudArrowUp} size={30} />
                <span className={cx('title')}>Đăng bài</span>
              </button>
            </div>
            <div className="absolute bottom-[10%] left-4 right-4 flex flex-col">
              <button
                onClick={handleLogout}
                className="rounded-md sm:transform hover:scale-[1.03] hover:text-red-500 transition-all"
              >
                <FontAwesomeIcon icon={faRightFromBracket} size={30} />
                <span className={cx('title')}>Đăng xuất</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {isShow && <ProductUploadModal setShow={setIsShow} />}
    </>
  );
}

export default NavBar;
