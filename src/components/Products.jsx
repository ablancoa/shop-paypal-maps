import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import Loader from './Loader';
import { TYPES } from '../actions/shopping';
import '../styles/components/Products.css'

export default function Products() {
  const { dispatch, products } = useContext(AppContext);

  const hanadleAddToCart = (product) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: [product, 1] })
  }

  return (
    <div className='Products'>
      {products.length === 0 ?
        (
          <Loader />
        ) : (
          <div className='Products-items'>
            {products.map((product) => (
              <Product key={product.id} product={product.attributes} hanadleAddToCart={hanadleAddToCart} />
            ))}
          </div>
        )}

    </div>
  )
}
