import './Cart.css'


export const CartItem = ({ thumbnail,description,title,quantity,addToCart }) => {
    return (
        <li>
            <img src={thumbnail} alt={description} />
            <div><strong>{title}</strong></div>
            <footer>
                <small>Qty:{quantity}</small>
                <button
                onClick={addToCart}
                >
                    +
                </button>
            </footer>
        </li>
    )
}
