import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Header.css';
import logoIcon from '../assets/images/real_madrid_icon.png'

export default function Header() {
  const { state } = useContext(AppContext);

  let total = 0;
  state.cart.map((item) => total = item.quantity + total)

  return (
    <div className='Header'>
      <div className='Header-title-container'>
        <img src={logoIcon} alt='logo real madrid' width={35} height={35} />
        <h1 className='Header-title'>
          <Link to={`/`}>
            FakeMadrid-Store
          </Link>
        </h1>
      </div>
      <div className='Header-checkout'>
        <Link to={`/checkout`}>
          <i className="fa-solid fa-basket-shopping"></i>
        </Link>
        <div className='Header-alert'>{total}</div>
      </div>
    </div>
  )
}
