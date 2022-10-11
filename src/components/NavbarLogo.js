// Agregue aqui propiedades de logo para el navbar
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function NavBarLogo(){
    return(
        <Link to='/' className='header__logo'>
          <img className='header__img'
            src={logo}
            title='Ir a Home'
            alt='Logo mercado libre - imagen dos manos'
            height='34px' />
        </Link>
    )
}

export default NavBarLogo;