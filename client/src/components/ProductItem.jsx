import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import '../styles/ProductItem.css'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='product-item'>
        <div className='product-item-imagebox'>
            <img className='product-item-image' src={image[0]} alt={name} />
        </div>
        <p className='product-item-name'>{name}</p>
        <p className='product-item-price'>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem
