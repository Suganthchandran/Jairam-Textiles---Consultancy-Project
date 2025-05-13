import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import '../styles/ProductItem.css'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({id,image,name,markedPrice, discountPrice, discount}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='product-item'>
        <div className="relative">
          <div className='product-item-imagebox'>
            <img className='product-item-image' src={image[0]} alt={name} />
        </div>
        <p className='product-item-name'>{name}</p>
        <div className='flex flex-row gap-4 items-center'>
            <p className='product-item-price-marked line-through text-red-500'>{currency} {markedPrice}</p>
            <p>{currency} {discountPrice}</p>
        </div>
        <div className='absolute top-0 right-10 bg-red-500 text-white px-2 py-2 rounded-lg'>
            <p>{discount}% off</p>
        </div>
        </div>
    </Link>
  )
}

export default ProductItem
