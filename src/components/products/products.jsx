import { useContext, useState } from "react"
import { AddToCartIcon, RemoveFromCartIcon } from "../icons/Icons"
import './products.css'
import { CartContext } from "../../Context/CartContext"


export const Products = ({ products }) => {
    const { addToCart,removeFromCart, cart } = useContext(CartContext)
    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {
                    products?.map((prod) => {
                        const isProductInCart = checkProductInCart(prod)
                        return (
                            <li key={prod.id}>
                                <img
                                    src={prod.thumbnail}
                                    alt={prod.title} />
                                <div>
                                    <strong>{prod.title}</strong>
                                    <p>${prod.price}</p>
                                </div>
                                <div>
                                    <button 
                                    style={{backgroundColor: isProductInCart ? 'red' : 'blue' }}
                                    onClick={() => {
                                        isProductInCart
                                        ? removeFromCart(prod) 
                                        : addToCart(prod)
                                    } }>
                                        {
                                            isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}
