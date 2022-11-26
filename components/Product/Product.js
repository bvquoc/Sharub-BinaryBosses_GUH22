import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product({ data }) {
  return (
    <Link className={cx('wrapper')} href={`/product?p=${data.id}`}>
      <img
        className={cx('image')}
        src="https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/banh-mi-thit-bo-nuong-thumbnail-1.jpg"
        alt={data.name}
      />

      <div className={cx('content')}>
        <h3 className={cx('name')}>{data.name}</h3>

        <div className={cx('location-wrapper')}>
          <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
          <span className={cx('location')}>{data.pickupLocation}</span>
        </div>
      </div>
    </Link>
  );
}

export default Product;
