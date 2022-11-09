import React,{useContext, useEffect, useState} from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/Cart-Context';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)
  const {items} = cartCtx
  const [buttonbump, setbuttonbump] = useState(false)
  const btnClass = `${classes.button} ${buttonbump ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbuttonbump(true);

    const timer = setTimeout(() => {
      setbuttonbump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
//reduce內的0，表示default value為0
  return (
  <button className={btnClass} onClick = {props.onClick}>
    <span className={classes.icon}>
      <CartIcon/>
    </span>
    <span>購物車</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
  </button>
  );
};

export default HeaderCartButton
