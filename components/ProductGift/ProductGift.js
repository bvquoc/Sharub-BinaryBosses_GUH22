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
    <div
      className={cx('wrapper', {
        unavailable: data.amount <= 0,
      })}
      onClick={handlePickGift}
    >
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
            <span className={cx('condition-count')}>{data.gp} Greenpoint</span>
          </div>
          <div>Còn lại: {data.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
