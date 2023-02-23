import React, { useContext, useEffect } from 'react';
import { TYPES } from '../actions/shopping';
import AppContext from '../context/AppContext';

import '../styles/components/Success.css'

export default function Success() {
  const { state, dispatch } = useContext(AppContext)
  const { buyer } = state;

  useEffect(() => {
    function deleteCart() {
      (state.cart.length !== 0) && dispatch({ type: TYPES.CLEAR_CART })
    }
    deleteCart()
  }, [dispatch, state.cart.length])


  return (
    <div className="Success">
      <div className="Success-content">
        <h3>Datos del comprador:</h3>
        {buyer ?
          (
            <div className="Buyer-data">
              <p>{`Name: ${buyer[0].name}`}</p>
              <p>{`Email: ${buyer[0].email}`}</p>
              <p>{`Address: ${buyer[0].address} ${buyer[0].apto} ${buyer[0].city} ${buyer[0].state} ${buyer[0].country}`}</p>
              <p>{`Phone: ${buyer[0].phone}`}</p>
            </div>
          ) : ""}
        <h2>Gracias por tu compra</h2>
        <span>Tu pedido llegara en tres dias</span>
      </div>
    </div>
  )
}
