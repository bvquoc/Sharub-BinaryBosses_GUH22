import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './NavBar.module.scss';
import { CalendarIcon, HomeIcon, LibraryIcon, PointIcon, SettingIcon } from 'components/Icons';
import images from 'assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { signOut } from 'firebase/auth';
import { auth } from '~/firebase/clientApp';
import { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';

const cx = classNames.bind(styles);

const ROUTERS_PATH = [
  {
    path: '/',
    title: 'Trang chủ',
    icon: <HomeIcon />,
  },
  {
    path: '/greenpoint',
    title: 'Greenpoint',
    icon: <PointIcon />,
  },
  {
    path: '/library',
    title: 'Thư viện',
    icon: <LibraryIcon />,
  },
  {
    path: 'datlich:V',
    title: 'Đặt lịch',
    icon: <CalendarIcon />,
  },
  {
    path: 'setting',
    title: 'Cài đặt',
    icon: <SettingIcon />,
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

  return (
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
          </div>
          <button
            onClick={handleLogout}
            className="absolute bottom-10 left-4 right-4 py-2 rounded-md sm:transform hover:scale-[1.03] transition-all"
          >
            <FontAwesomeIcon icon={faRightFromBracket} size={30} />
            <span className={cx('title')}>Đăng xuất</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
