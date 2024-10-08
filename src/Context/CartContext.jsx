import { createContext } from "react";
import { useCartReducer } from "../Hooks/useCartReducer";

export const CartContext = createContext()


export const CartProvider = ({ children }) => {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

    return (
        <CartContext.Provider
            value={{
                cart: state,
                addToCart,
                removeFromCart,
                clearCart
            }}>
            {children}
        </CartContext.Provider>
    )
}