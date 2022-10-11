
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import searchImg from '../assets/lupa.png';
import ListProducts from '../components/ListProducts';
import NavBarLogo from '../components/NavbarLogo';

function SearchNuevo() {

  
  const navigate = useNavigate();
  const [searchList, setSearchList] = useState('');
  const [data, setData] = useState([]);

  // Data proveniente de api
  useEffect(() => {
    const fetchSearch = async () => {
      const dataRes = await fetch(`/api/search?q=${searchList}`)
        .then(res => res.json())
      setData(dataRes.slice(0, 4))
    }
    if (searchList.length === 0 || searchList.length > 3) fetchSearch();
  }, [searchList]);

  // Ruta del search
  const routeChange = (e) => {
    e.preventDefault();
    let path = `/items?search=${searchList}`;
    navigate(searchList ? path : '/items?search=query', { replace: true });
  };

  const dataList = data.map((item) => {
    return <ListProducts
      key={item.id}
      item={item} />
  })

  return (
    <>
      <header className='Header'>
        <NavBarLogo />
        < div className='search' >
          <form className='search__form' onSubmit={routeChange}>
            <label className='search__label' htmlFor='search'></label>
            <input className='search__input'
              type='text'
              // value={searchList}
              id='searchId'
              name='search'
              placeholder='Nunca dejes de buscar'
              aria-label="Escribe una palabra según lo que quieres buscar"
              aria-describedby='button-search'
              onChange={(e) => setSearchList(e.target.value)}
            />
            <button className='search__button'
              type='submit'
              title='Busqueda - Mercado Libre'
              alt='Boton de busqueda'
              id='button-search'
            >
              <img className='search__icon'
                src={searchImg} alt='Icono de una lupa'
                width="24px" />
            </button>
          </form>
        </div >
      </header>

        <section className='products'>
          {/* <ul className='product__list'> */}
            {dataList}
          {/* </ul> */}
        </section>
    </>
  )

}

export default SearchNuevo;