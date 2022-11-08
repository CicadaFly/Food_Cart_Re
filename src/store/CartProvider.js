import CartContext from "./Cart-Context";
import { useReducer } from "react";

const defaultCartValue = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) =>{
    if (action.type === "ADD") {
        const existItemIndex = state.items.findIndex(
            (item)=> item.id === action.item.id
        ); // 表示搜尋state內現有item的id是否有跟加入的相同，若有，會返回現有陣列的位置
        const existItem = state.items[existItemIndex];
        let updateItems;
        if (existItem) {
            const updateItem = {
                ...existItem,
                amount: existItem.amount + action.item.amount
            };
            updateItems = [...state.items];
            updateItems[existItemIndex] = updateItem; //因為上面更新了原本陣列的數量，並且另存到updateItem內，所以要把已存在的陣列，轉為updateItem的數值
        } else
        {
            updateItems = state.items.concat(action.item)
        };
        const updateAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItems,
            totalAmount: updateAmount
        };
    };

    return defaultCartValue
}

const CartProvider = (props) => {

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
        addItem: addItemToCartHandler,
        deleteItem: deleteItemFromCartHandler,
    }   


    return (
    <CartContext.Provider value={cartInsideItem}>
    {props.children}
    </CartContext.Provider>
        );
    };

export default CartProvider