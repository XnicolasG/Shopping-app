import React from 'react'
import Filter from '../Filter/Filter'

const Header = ({changeFilters}) => {
    return (
        <header>
            <h1>Shopping App 🛒 </h1>
            <Filter changeFilters={changeFilters} />
        </header>
    )
}

export default Header