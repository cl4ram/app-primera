import { useReducer } from "react";
import { CartContext } from "./cartContext";
import { CartReducer } from "./cartReducer";
import { SHOW_HIDE_CART , ADD_TO_CART , REMOVE_ITEM } from "../Type";

export const CartState = ( { children }) => {
    const initialState = {
        showCart: false ,
        cartItems: [],
    }

    const [state , dispatch ] = useReducer(CartReducer , initialState);
    
    const addToCart = (item, counter) => {
        const exist = state.cartItems.some(el => el.id === item.id);
        if (exist){
            let objIndex = state.cartItems.findIndex((obj => obj.id === item.id))
            state.cartItems[objIndex].quantity += counter
            state.cartItems[objIndex].total = state.cartItems[objIndex].precio * state.cartItems[objIndex].quantity
        } else {
            item = { ...item , quantity: counter }
            item.total = item.precio * item.quantity
            dispatch({ type: ADD_TO_CART , payload: item});
        };
    };

    const showHideCart = () => {
        dispatch({type: SHOW_HIDE_CART});
    }

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM , payload: id})
    };

    return (
        <>
        <CartContext.Provider value={
            {showCart: state.showCart,
            cartItems: state.cartItems,
            addToCart, showHideCart, removeItem
        }}>
            {children}
        </CartContext.Provider>
        </>
    )
}