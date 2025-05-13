import React, { useContext, useEffect, useState } from 'react'
import '../styles/Product.css'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductdata = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item)
        // console.log(item)
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductdata();
  }, [productId, products])

  return productData ? (
    <div className='product-details'>
      <div className='product-detail-main'>
        <div className='product-images-main'>
          <div className='product-images-list'>
            {
              productData.image.map((item, index) => (
                <img onPointerEnter={() => setImage(item)} onPointerLeave={() => setImage(productData.image[0])} src={item} key={index} className='product-images' />
              ))
            }
          </div>
          <div className='product-active-image'>
            <img style={{ width: '90%', height: '100%', objectFit: 'cover' }} src={image} />
          </div>
        </div>

        <div>
          <h1 className='product-name'>{productData.name}</h1>
          <div className='product-details-rating'>
            {Array.from({ length: productData.rating }, (_, i) => (
              <img key={i} src={assets.star_icon} alt="Rating Star" />
            ))}
            {Array.from({ length: 5 - productData.rating }, (_, i) => (
              <img key={i + productData.rating} src={assets.star_dull_icon} alt="Rating Star" />
            ))}

          </div>

          <div className='flex flex-row gap-4 items-center'>
            <p className='product-details-price'>{currency}{productData.discountPrice}</p>
            <p className='product-details-price line-through text-red-500'>{currency}{productData.markedPrice}</p>
          </div>
          <p className='product-details-desc'>{productData.description}</p>
          <p className='product-details-material'>
            This product is made of high-quality <strong className='product-detail-material-name'> {productData.material} </strong>.
          </p>

          <div className='product-mini-details'>
            <p style={{ fontSize: '1.3rem' }}>Select Size</p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`product-size-button ${item == size ? 'product-size-click' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <div>
            <button onClick={() => addToCart(productData._id, size)} className='product-details-add-to-card-button'>ADD TO CART</button>
          </div>
          <hr className='product-detail-hr' />
          <div className='product-detail-last'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      <div className='product-info-container'>
        <div style={{ display: 'flex' }}>
          <b className='product-info'>Description</b>
          <p className='product-info'>Reviews (169)</p>
        </div>
        <div className='product-info-expand'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste modi aliquam totam aspernatur, et deserunt molestiae beatae blanditiis dolorem tenetur. Tempora a repellat fugit esse eveniet ea animi expedita reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia, dolore ipsum obcaecati dignissimos molestiae autem nam perspiciatis porro, aspernatur quod assumenda. Sint nostrum quod quidem aut. Minima, reiciendis</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam minima quisquam harum eos quam modi sed iusto inventore, commodi quae corporis numquam ex perspiciatis officiis aliquam aliquid sequi culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quia odit aut, eos excepturi dolores sit do</p>
        </div>
      </div>

      <RelatedProducts id={productData._id} category={productData.category} material={productData.material} />

    </div>
  ) : <div style={{ opacity: '0' }}></div>
}

export default Product
