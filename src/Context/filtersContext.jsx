import React, { createContext } from 'react'

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filter, setFilter] = React.useState({
    category: 'all',
    minPrice: 0
  })
  return (
    <FilterContext.Provider
      value={{
        filter, setFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
