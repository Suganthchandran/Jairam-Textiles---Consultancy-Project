import React, { useContext, useEffect, useState } from 'react'
import '../styles/LatestCollection.css'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <div className='latestcollection'>
        <div>
          <Title title1={'LATEST'} title2={'COLLECTION'} size={'2.3rem'} position={'center'}/>
          <p className='latestcollection-text'>Here Visit the Latest Collection of Diago and I hope you will buy and make your life happier and fruitfully</p>
        </div>
        <div className='latestcollection-images'>
          {latestProducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.discountPrice} />
          ))}
        </div>
    </div>
  )
}

export default LatestCollection;
