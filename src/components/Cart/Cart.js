import React from 'react';
import  Modal  from '../UI/Modal';
import classes from './Cart.module.css'
import { Fragment, useContext, useState } from 'react';
import CartContext from '../../store/Cart-Context';
import CartItem from './CartItem';
import CustomerCheck from './CustomerCheck';

const Cart = (props) =>{
    const [isOrdered, setIsOrdered] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [finishedSubmit, setFinishedSubmit] = useState(false)

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
            )}
        </ul>
    );

    const submitHandler = async (userdata) =>{
        setIsLoading(true);
        await fetch ('https://react-test-74361-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json'), {
            method: 'POST',
            body: JSON.stringify({
            user: userData,
            orderedItems: cartCtx.items,})
        };
        setIsLoading(false);
        setFinishedSubmit(true);
        cartCtx.clearCart();
    };

    const orderHandler = () =>{
        setIsOrdered(true)
    };

    const orderModal = (
        <Fragment>
            {cartItem}
            <div className={classes.total}>
                <span>Total {totalPrice}</span>
                <span>$money</span>
            </div>
            {isOrdered && (
                <CustomerCheck onConfirm={submitHandler} onCancel={props.onClose} />
             )};
            {!isOrdered && (
                <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button} onClick={orderHandler} >Order</button>}
             </div>)};

        </Fragment>
    )
    
    const loadingContent = <p>Sending order data...</p>;

    const finishSubmitContent = (
      <React.Fragment>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
      </React.Fragment>
    );

return(
<Modal onClose = {props.onClose}>
    {!isLoading && !finishedSubmit && orderModal}
    {isLoading && loadingContent}
    {!isLoading && finishedSubmit && finishSubmitContent}
</Modal>
);
};

export default Cart