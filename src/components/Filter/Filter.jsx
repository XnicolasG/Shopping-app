import { useId, useState } from 'react'
import './filter.css'

const Filter = ({changeFilters}) => {
    const [filterPrice, setFilterPrice] = useState(0)
    const minPriceFilterId = useId();
    const categoryFilterId = useId()

    const handleChangeMinPrice = (e) => {
        setFilterPrice(e.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice:e.target.value 
        }))
    };
    const handleChangeCategory = (e) => {
        changeFilters(prevState => ({
            ...prevState,
            category:e.target.value 
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Minimum price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min={0}
                    max={1000}
                    onChange={handleChangeMinPrice}
                />
                <span>${filterPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categories</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                    <option value="furniture">Furniture</option>
                    <option value="groceries">Groceries</option>
                    <option value="home-decoration">Home decoration</option>
                    <option value="kitchen-accessories">Kitchen accessories</option>
                    <option value="laptops">laptops</option>
                    <option value="mens-shirts">Mens shirts</option>
                    <option value="mens-shoes">Mens shoes</option>
                    <option value="mens-watches">Mens watches</option>
                    <option value="mobile-accessories">Mobile accessories</option>
                    <option value="motorcycle">motorcycle</option>
                    <option value="skin-care">Skin care</option>
                    <option value="smartphones">Smartphones</option>
                    <option value="sports-accessories">Sports accessories</option>
                    <option value="sunglasses">Sunglasses</option>
                    <option value="tablets">Tablets</option>
                    <option value="tops">Tops</option>
                    <option value="vehicle">Vehicle</option>
                    <option value="womens-bags">Womens bags</option>
                    <option value="womens-dresses">Womens dresses</option>
                    <option value="womens-jewellery">Womens jewellery</option>
                    <option value="womens-shoes">Womens shoes</option>
                    <option value="womens-watches">Womens watches</option>
                </select>
            </div>
        </section>
    )
}

export default Filter