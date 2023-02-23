import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import AppContext from '../context/AppContext';
import { TYPES } from '../actions/shopping';
import '../styles/components/Checkout.css'

export default function Checkout() {
  const { state, dispatch } = useContext(AppContext);
  const { cart } = state;
  const [total, setTotal] = useState()

  const handleRemoveFromCart = (product, all = false) => {
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: product });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: product });
    }
  }

  const getTotal = useCallback(() => {
    let totalCart = 0;
    if (cart.length > 0) {
      cart.map((item) => {
        let quantity = item.quantity;
        let price = item.price;
        totalCart = totalCart + (quantity * price)
        return null;
      })

      totalCart = Number(Math.round(totalCart + "e+2") + "e-2")
    }

    setTotal(totalCart)

  }, [cart])


  useEffect(() => {
    getTotal()
  }, [getTotal])

  return (
    <>
      <Helmet>
        <title>PlatziShop - Checkout</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Sin pedidos</h3>}
          {cart.map((item, index) => (
            <div className="Checkout-item" key={index}>
              <div className="Checkout-element">
                <h4>{`${item.title} x ${item.quantity}`}</h4>
                <span>{item.price}</span>
              </div>
              <button type='button' onClick={() => handleRemoveFromCart(item)}>
                <i className="fa-solid fa-trash-can" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio total: $ ${total}`}</h3>
            <Link to={`/checkout/information`}>
              <button type='button'>Continuar pedido</button>
            </Link>
          </div>
        )}

      </div>
    </>
  )
}
