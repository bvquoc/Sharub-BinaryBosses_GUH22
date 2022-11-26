import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductGift.module.scss';

const cx = classNames.bind(styles);

function Product({ data }) {
  const handlePickGift = () => {
    console.log('Choose this Gift');
  };

  return (
    <Link className={cx('wrapper')} href={`/product/${data._docId}`}>
      <img
        className={cx('image')}
        src={data.imgUrl || 'https://github.com/bvquoc/guh22-binarybosses/blob/main/public/img/senda.jpg?raw=true'}
        alt={data.name}
      />

      <div className={cx('content')}>
        <h3 className={cx('name')}>{data.name}</h3>

        <div className={cx('detail')}>
          <div className={cx('condition')}>
            <FontAwesomeIcon className={cx('icon')} icon={faDiamond} />
            <span className={cx('condition-count')}>${data.condition} Greenpoint</span>
          </div>

          <button className={cx('exchange-btn')} onClick={handlePickGift}>
            Đổi
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
