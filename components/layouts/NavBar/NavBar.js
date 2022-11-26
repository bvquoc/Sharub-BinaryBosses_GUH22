import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames/bind';

import styles from './NavBar.module.scss';
import { CalendarIcon, HomeIcon, LibraryIcon, PointIcon, SettingIcon } from 'components/Icons';
import images from 'assets/images';

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
    router.push(href);
    console.log(href);
  };

  const classes = (href) =>
    cx('item', {
      active: router.asPath === href,
    });

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link className={cx('logo')} href="/">
          <img className={cx('logo-icon')} src={images.logo} alt="logo" />
        </Link>

        <span className={cx('line')}></span>

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
      </div>
    </header>
  );
}

export default NavBar;
