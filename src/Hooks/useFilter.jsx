import { useContext, useState } from "react"
import { FilterContext } from "../Context/filtersContext";

export const useFilter = () => {
    const {setFilter, filter} = useContext(FilterContext);
    console.log(filter);
    
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
    return {filterProducts,filter,setFilter}
  }