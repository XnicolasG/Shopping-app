import { useReducer } from "react";
import { CartActionTypes, CartReducer, initialState } from "../Reducers/Cart";

export const useCartReducer = () => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (product) => dispatch({
        type: CartActionTypes.addToCart,
        payload: product
    });
    ;
    const removeFromCart = product => dispatch({
        type: CartActionTypes.removeFromCart,
        payload: product
    });
    const clearCart = () => dispatch({
        type: CartActionTypes.clearCart
    });
    return { state, addToCart, removeFromCart, clearCart }
}