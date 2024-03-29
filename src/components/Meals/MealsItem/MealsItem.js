import classes from './MealsItem.module.css'
import MealsForm from './MealsForm'
import { useContext } from 'react';
import CartContext from '../../../store/Cart-Context';

const MealsItem =(props)=>{
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);
    const addToCartHandler = (amount) =>{
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
return (
<li className={classes.meal}>
    <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div><MealsForm id={props.id} onAddToCart={addToCartHandler}/></div>
</li>
);    
};

export default MealsItem