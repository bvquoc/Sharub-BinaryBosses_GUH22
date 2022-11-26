import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ data }) {
  return (
    <Link className={cx('wrapper')} href={`/product/${data._docId}`}>
      <img
        className={cx('image')}
        src={data.imgUrl || 'https://github.com/bvquoc/guh22-binarybosses/blob/main/public/img/senda.jpg?raw=true'}
        alt={data.name}
      />

      <div className={cx('content')}>
        <div>
          <h3 className={cx('name')}>{data.name}</h3>
          <p className={cx('desc')}>{data.description}</p>
        </div>

        <div className={cx('location-wrapper')}>
          <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
          <span className={cx('location')}>{data.pickupLocation}</span>
        </div>
      </div>
    </Link>
  );
}

export default Product;
