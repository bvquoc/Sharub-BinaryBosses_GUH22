import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const ROUTERS_PATH = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/profile',
    title: 'Profile',
  },
  {
    path: '/',
    title: 'Home',
  },
];

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('left-wrapper')}>
          <Link href="/">
            <img
              className={cx('logo')}
              src="https://codeforces.org/s/15736/images/codeforces-sponsored-by-ton.png"
              alt="logo"
            />
          </Link>

          <div className={cx('routers')}>
            {ROUTERS_PATH.map((page, index) => (
              <Link className={cx('link')} href={page.path} key={index}>
                {page.title}
              </Link>
            ))}
          </div>
        </div>

        <div className={cx('actions')}>
          <button className={cx('icon')}>
            <FontAwesomeIcon icon={faBell} />
            <span className={cx('icon-noti')}>12</span>
          </button>

          <Link className={cx('avatar')} href="/profile">
            <img
              className={cx('avatar-img')}
              src="https://vcdn1-giaitri.vnecdn.net/2022/08/25/Avatar-213-8923-1661403266.png?w=0&h=0&q=100&dpr=2&fit=crop&s=KWo2kCkyQr5Xxia52ObvvA"
              alt="Nguyen Van A"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
