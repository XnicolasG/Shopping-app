import { useState } from "react"
import { Products } from "./components/products/products"
import { products as initProducts } from './mocks/products.json'
import Header from "./components/Header/Header";

function App() {
  const [products, setProducts] = useState(initProducts);
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice &&
        (
          filter.category === 'all' ||
          product.category === filter.category
        )
      )
    })
  }
  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header changeFilters={setFilter} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
