import React, { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../icons/Icons'
import './Cart.css'
import { useCart } from '../../Hooks/useCart'
import { CartItem } from './CartItem'

export const Cart = () => {
    const cartCheckBoxId = useId()
    const { cart, addToCart, clearCart } = useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckBoxId}>
                <CartIcon />
            </label>
            <input id={cartCheckBoxId} type="checkbox" hidden />

            <aside className="cart">
                <ul>
                    {
                        cart?.map((product) => (
                            <CartItem 
                            key={product.id} 
                            addToCart={() => addToCart(product)}
                            {...product} />
                        ))
                    }
                </ul>
                {
                    cart.length > 0 && <button onClick={clearCart}><ClearCartIcon /></button>
                }
            </aside>
        </>
    )
}
