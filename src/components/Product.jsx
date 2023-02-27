import React, { useEffect, useState } from 'react';

export default function Product({ product, hanadleAddToCart, local }) {
  const [urlProduct, setUrlProduct] = useState("");

  useEffect(() => {
    if (!local) {
      try {
        const url = product.image.data[0].attributes.formats.small;
        if (url) {
          setUrlProduct(`https://backend-fakemadridstore-production.up.railway.app${url.url}`);
        } else {
          setUrlProduct(`https://backend-fakemadridstore-production.up.railway.app${product.image.data[0].attributes.url}`);
        }
      } catch (error) {
        console.log(error)
      }
    }
    else {
      setUrlProduct(product.image)
    }
  }, [product.image])

  return (
    <div className='Products-item'>
      <img src={`${urlProduct}`} alt={product.title} />
      <div className="Product-item-info">
        <h2>{product.title}
          <span>$
            {' '}
            {product.price}
          </span>
        </h2>
        <p>{product.description}</p>
      </div>
      <button type='button' onClick={() => hanadleAddToCart(product)}>Comprar</button>
    </div>
  )
}
