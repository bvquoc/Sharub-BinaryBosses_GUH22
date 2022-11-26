import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ data, onClick }) {
  return (
    <div className={cx('wrapper')} onClick={() => onClick(data)}>
      <img
        className={cx('image')}
        src={data.imgUrl || 'https://github.com/bvquoc/guh22-binarybosses/blob/main/public/img/senda.jpg?raw=true'}
        alt={data.name}
      />

      <div className={cx('content')}>
        <h3 className={cx('name')}>{data.name}</h3>

        <div className={cx('detail')}>
          <div className={cx('first-line')}>
            <span className={cx('owner')}>
              Đăng bởi <span className={cx('owner-name')}>{data.ownerName}</span>
            </span>
            <span className={cx('line')}></span>
            <span className={cx('distance')}>{data.distance}</span>
          </div>
          <div className={cx('condition')}>
            <FontAwesomeIcon className={cx('icon')} icon={faDiamond} />
            <span className={cx('condition-title')}>Điều kiện nhận: </span>
            <span className={cx('condition-count')}>
              {data.condition ? `Tài khoản trên ${data.condition} Greenpoint` : 'Bất kỳ ai'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
