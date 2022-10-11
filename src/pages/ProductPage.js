import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import NavBarLogo from "../components/NavbarLogo";
import SearchBox from "../components/SearchBox";
// import { Helmet } from 'react-helmet-async';
// 
function ProductPage() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState('');

  useEffect(() => {
    const fetchSearch = async () => {
      const dataRes = await fetch(`/api/items/${id}`)
        .then(res => res.json());
      setProduct(dataRes);
    }
    fetchSearch();
  }, [product]);

  return (
    <>
      <header className='Header'>
        <NavBarLogo />
        <SearchBox setData={null} />
      </header>
      <section className='detail'>
        {/* <Helmet>
          <title>{product.title} | Mercado Libre</title>
        </Helmet> */}
        <div className='detail__component'>
          <img src={product.picture}
            className='detail__img'
            alt='Imagen del producto'
            width='680px' />
          <div className='detail__text'>
            <p className='detail__location'>{product.condition} | {product.sold_quantity} vendidos </p>
            <p className='detail__title'>{product.title}</p>
            <p className='detail__value'>${product.price}</p>
            <button className='detail__button'
              type="button"
              name="Comprar"
              title="Comprar producto">
              Comprar
            </button>
          </div>
        </div>
        <div className='detail__description'>
          <div className='detail__descriptionProduct'>Descripción del producto</div>
          <p className='detail__description__detail'>{product.description}</p>
        </div>
      </section>
    </>
  )
}

export default ProductPage;