import { Link } from 'react-router-dom';
import shippingImg from '../assets/car.png';
import '../styles/components/ListProducts.scss';

function ListProducts({ item }) {

  const shippingActive = item.shipping ? 'product__shipping --active' : 'product__shipping --false';

  return (
    <li key={item.id} className='product__element'>
      <Link to={`/items/${item.id}`}>
        <img src={item.images}
          className='product__img'
          alt='Imagen de '
        />
      </Link>
      <div className='product__section'>
        <div className='product__props'>
          <p className='product__value'>${item.price.toLocaleString('de-DE')}</p>
          <div className={shippingActive}>
            <img src={shippingImg}
              className='product__shipping--img'
              alt='Imagen de carro'
              width='16px'
            />
          </div>
        </div>
        <div className='product__description'>
          <Link to={`/items/${item.id}`} className='product__link'>
            <p className='product__title'>{item.title}</p>
          </Link>
          <p className='product__state'>{item.condition}!</p>
        </div>
      </div>
      <div className='product__location'>
        <p className='product__city'>{item.address}</p>
      </div>
    </li>
  )
};

export default ListProducts;


