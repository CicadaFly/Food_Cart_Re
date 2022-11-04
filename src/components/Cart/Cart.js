import  Modal  from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) =>{
    const cartItem = (
        <ul className={classes['cart-items']}>
            {
            [{id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5}].map((item) =>
            (<li>{item.name}</li>))
            }    
        </ul>
    );


return(
<Modal onClose = {props.onClose}>
{cartItem}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>$money</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
</Modal>
);
};

export default Cart