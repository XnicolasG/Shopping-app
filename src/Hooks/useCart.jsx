import { useContext } from 'react'
import { CartContext  } from '../Context/CartContext'

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined){
    throw new Error('useCart must be used within CartProvider')
  }
  
    return context
}
