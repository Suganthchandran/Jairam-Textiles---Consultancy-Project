import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import '../styles/RelatedProducts.css'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({id,category,material}) => {

    const {products} = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{
        if(products.length > 0) {
            let productsCopy = products.slice();

            productsCopy = productsCopy.filter((item) => item.category === category);
            productsCopy = productsCopy.filter((item) => item.material === material);
            productsCopy = productsCopy.filter((item) => item._id !== id);

            setRelated(productsCopy.slice(0,5));
        }
    },[products])
  return (
    <div className='related-products'>
       <div className='related-products-title'>
        <Title title1={'RELATED'} title2={'PRODUCTS'} size={'2.3rem'} position={'center'}/>
       </div>

       <div className='related-product-display'> 
            {related.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.discountPrice} image={item.image} />
            ))}
       </div>
    </div>
  )
}

export default RelatedProducts
