import { useState } from "react"
import { Products } from "./components/products/products"
import { products as initProducts } from './mocks/products.json'
import Header from "./components/Header/Header";
import { useFilter } from "./Hooks/useFilter";
import { Footer } from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./Context/CartContext";

function App() {
  const [products, setProducts] = useState(initProducts);
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(products);
  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
