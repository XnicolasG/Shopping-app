import { useContext } from 'react'
import './Footer.css'
import { FilterContext } from '../../Context/filtersContext'
import { useCart } from '../../Hooks/useCart'

export const Footer = () => {
  const { filter } = useContext(FilterContext)
  const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️ － <span>@xnicolasg</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      {
        // JSON.stringify(cart,null,2)
      }
    </footer>
  )
}
