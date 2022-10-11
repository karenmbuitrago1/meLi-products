import { Link } from 'react-router-dom';
import '../styles/components/ListProducts.scss';

function ListProducts({ item }) {
  return (
    <li className='product--element'>
      <Link to={`/items/${item.id}`}>
        <img src={item.imagen}
          className='product--img'
          alt='Imagen de '
        />
      </Link>
      <div className='product--section'>
        <p className='product--value'>${item.value}</p>
        <div className='product--description'>
          <Link to={`/items/${item.id}`}>
            <p className='product--title'>{item.title}</p>
          </Link>
          <p className='product--state'>{item.state}</p>
        </div>
      </div>
      <div className='product--location'>
        <p className='product--city'>{item.location}</p>
      </div>
    </li>
  )
};

export default ListProducts;


