import { useContext } from 'react'
import './Footer.css'
import { FilterContext } from '../../Context/filtersContext'

export const Footer = () => {
  const {filter} = useContext(FilterContext)
  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️ － <span>@xnicolasg</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      {
        JSON.stringify(filter,null,2)
      }
    </footer>
  )
}
