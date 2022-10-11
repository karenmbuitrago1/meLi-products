import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import searchImg from '../assets/lupa.png';

function SearchBox({setData}){

    const navigate = useNavigate();
    const [searchList, setSearchList] = useState('');
    const [submit, setSubmit] = useState(false);

    useEffect(() => {
        const fetchSearch = async () => {
          const dataRes = await fetch(`/api/search?q=${searchList}`)
            .then(res => res.json())
          setData(dataRes.slice(0, 4));
          setSubmit(false);
        }
        
        if (setData != null && (searchList.length === 0 || searchList.length > 3)) fetchSearch();
      }, [submit]);

      const routeChange = (e) => {
        e.preventDefault();
        let path = `/items?search=${searchList}`;
        navigate(searchList ? path : '/items?search=query', { replace: true });
        setSubmit(true);
      };
    
    return(
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
    )
}

export default SearchBox;