
import React, { useState } from 'react'
import ListProducts from '../components/ListProducts';
import NavBarLogo from '../components/NavbarLogo';
import SearchBox from '../components/SearchBox';

function SearchNuevo() {

  const [data, setData] = useState([]);

  const dataList = data.length > 0 ? data.map((item) => {
    return <ListProducts
      key={item.id}
      item={item} />
  }) : null;

  return (
    <>
      <header className='Header'>
        <NavBarLogo />
        <SearchBox setData={setData} />
      </header>

      <section className='products'>
        <ul className='product__list'>
          {dataList}
        </ul>
      </section>
    </>
  )

}

export default SearchNuevo;