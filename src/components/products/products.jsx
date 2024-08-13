import { useState } from "react"
import { AddToCartIcon } from "../icons/Icons"
import './products.css'


export const Products = ({ products }) => {
    return (
        <main className='products'>
            <ul>
                {
                    products?.map((prod) => (
                        <li key={prod.id}>
                            <img
                                src={prod.thumbnail}
                                alt={prod.title} />
                            <div>
                                <strong>{prod.title}</strong>
                                <p>${prod.price}</p>
                            </div>
                            <div>
                                <button>
                                    <AddToCartIcon />
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}
