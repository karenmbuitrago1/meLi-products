import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet-async';
// 
function ProductPage() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState('');
  // const queryParams = queryString.parse(window.location.search);

  // Create async function for fetching product list
  useEffect(() => {
    const fetchSearch = async () => {
      // console.log(id, "este es mi id")
      const dataRes = await fetch(`/api/items/${id}`)
        .then(res => res.json()) // Process the incoming data
      // Update productDetail state
      setProduct(dataRes);
    }
    fetchSearch();
  }, [product]);

  return (
    <>
      <div className='product--detail'>
        {/* <Helmet> */}
          {/* <title>{product.title} | Mercado Libre</title> */}
        {/* </Helmet> */}
        <div className='detail--component'>
          <img src={product.imagen}
            className='detail--img'
            alt='Imagen de '
          />
          <div className='detail--text'>
            <p className='detail--location'>{product.location}</p>
            <p className='detail--title'>{product.title}</p>
            <p className='detail--value'>{product.value}</p>
            <button className='detail--button'>Comprar</button>
          </div>
        </div>
        <div className='detail--description'>
          <div className='detail--descriptionProduct'>Descripción del producto</div>
          <p className='detail--description--detail'>{product.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProductPage;