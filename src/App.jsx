import { useState } from "react"
import { Products } from "./components/products/products"
import { products as initProducts } from './mocks/products.json'
import Header from "./components/Header/Header";
import { useFilter } from "./Hooks/useFilter";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState(initProducts);
  const {filterProducts,filter,setFilter} = useFilter()

  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header  />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
