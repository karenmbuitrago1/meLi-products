import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SearchNuevo from './searchNuevo';

function Home() {
  return (
    <header className="header">
      <Link to='/' className='nav--logo'>
        <img className='nav--logo_img'
          src={logo}
          title='Ir a Home'
          alt='Logo mercado libre - imagen dos manos'
          height='34px' />
      </Link>
      <SearchNuevo />
    </header>
  );
}

export default Home;