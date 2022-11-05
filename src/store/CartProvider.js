import CartContext from "./Cart-Context";
import { useReducer } from "react";

const defaultCartValue = {
    items: [],
    totalAmount: 0,
}
const CartProvider = (props) => {
    const cartReducer = (state, action) =>{
        if (cartDispatchAction === "ADD") {
            const updateItem = state.items.concat(action.item);
            const updateAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
                items: updateItem,
                totalAmount: updateAmount
            };
        };

        return defaultCartValue
    }
    
    const [cartState, cartDispatchAction] = useReducer(cartReducer, defaultCartValue)

    const addItemToCartHandler = (item) =>{
        cartDispatchAction({type: "ADD", item: item})
    }

    const deleteItemFromCartHandler = (id) =>{
        cartDispatchAction({type:"DELETE", id: id})
    }
    //return一組items跟totalAmount

    const cartInsideItem = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: {addItemToCartHandler},
        deleteItem: {deleteItemFromCartHandler},
    }   


    return (
    <CartContext.Provider value={cartInsideItem}>
    {props.children}
    </CartContext.Provider>
        )
    }

export default CartProvider