//import React,{useContext, useEffect, useState} from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
//import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  return (
  <button className={classes.button} onClick = {props.onClick}>
    <span className={classes.icon}>
      <CartIcon/>
    </span>
    <span>購物車</span>
    <span className={classes.badge}>5</span>
  </button>
  );
};

export default HeaderCartButton
