
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import searchImg from '../assets/lupa.png';

function SearchNuevo() {

  // const queryParams = queryString.parse(window.location.search);
  const navigate = useNavigate();
  const [searchList, setSearchList] = useState('');
  const [data, setData] = useState([]);

  // Create async function for fetching search list
  useEffect(() => {

    const fetchSearch = async () => {
      const dataRes = await fetch(`/api/items?q=${searchList}`)
        .then(res => res.json()) // Process the incoming data

      // console.log(dataRes, "hola")
      // Update searchList state
      setData(dataRes.slice(0, 4))
      // console.log(dataRes, "hola2")
    }



    if (searchList.length === 0 || searchList.length > 3) fetchSearch();
  }, [searchList]);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(searchList ? `/items?search=${searchList}` : '/items?search')
  };

  return (
    <>
      {/* <Link to='/items/search' className='search--link'> */}
      < div className='search' >
        <form className='search--form' onSubmit={submitHandler}>
          <label className='search--label' htmlFor='search'></label>
          <input className='search--input'
            type='text'
            value={searchList}
            id='searchId'
            name='search'
            placeholder='Nunca dejes de buscar'
            aria-label="Escribe una palabra según lo que quieres buscar"
            aria-describedby='button-search'
            onChange={(e) => setSearchList(e.target.value)}
          />
          <button className='search--button'
            type='submit'
            title='Busqueda - Mercado Libre'
            alt='Boton de busqueda'
            id='button-search'
          >
            <img className='search--icon' src={searchImg} alt='Icono de una lupa' />
          </button>
        </form>
        {/* </Link> */}
        {/* Button to fetch search data */}
      </div >
      {/* Display table of search after fetching search data */}
      {/* {searchResponse.length > 0 && <table> */}
      <section className='products'>
        <ul className='products--list'>
          {data.map((item) => (
            <li key={item.id} className='product--element'>
              <Link to={`/items/${item.id}`}>
                <img src={item.images}
                  className='product--img'
                  alt='Imagen de '
                />
              </Link>
              <div className='product--section'>
                <p className='product--value'>${item.price}</p>
                <div className='product--description'>
                  <Link to={`/items/${item.id}`}>
                    <p className='product--title'>{item.title}</p>
                  </Link>
                  <p className='product--state'>{item.state}</p>
                </div>
              </div>
              <div className='product--location'>
                <p className='product--city'>{item.address}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )

}

export default SearchNuevo;