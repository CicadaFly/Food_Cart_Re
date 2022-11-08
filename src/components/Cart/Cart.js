import  Modal  from '../UI/Modal';
import classes from './Cart.module.css'
import { useContext } from 'react';
import CartContext from '../../store/Cart-Context';
import CartItem from './CartItem';

const Cart = (props) =>{
    const cartCtx = useContext(CartContext)
    const totalPrice = cartCtx.totalAmount.toFixed(2)
    const hasItems = cartCtx.items.length > 0;
    const addItemHandler = (item) => {cartCtx.addItem({...item, amount: 1})}
    const removeItemHandler = (id) => {cartCtx.deleteItem(id)}
    const cartItem = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item)=>
            <CartItem 
            key = {item.id} //<li>格式都需要key
            name = {item.name}
            amount = {item.amount}
            price = {item.price}
            onAdd = {()=>addItemHandler(item)} //嘗試新作法，結果會跟下面的bind一樣
            onRemove = {removeItemHandler.bind(null, item.id)}
            />
            )};
        </ul>
    );


return(
<Modal onClose = {props.onClose}>
{cartItem}
    <div className={classes.total}>
        <span>Total {totalPrice}</span>
        <span>$money</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
    </div>
</Modal>
);
};

export default Cart