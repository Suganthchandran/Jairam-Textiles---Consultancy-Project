import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import '../styles/Cart.css'
import CartTotal from '../components/CartTotal'

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cardData, setCartData] = useState([]);

  useEffect(() => {
    if(products.length > 0) {
      let tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }

    setCartData(tempData)
    }
  }, [cartItems,products])

  return (
    <div className='cart'>
      <div className='cart-heading'>
        <Title title1={'YOUR'} title2={'CART'} size={'2.3rem'} position={'start'} />
      </div>
      <div>
        {
          cardData.length > 0 ? (
          cardData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className="cart-content">
                <div className="cart-content-inside">
                  <img className="cart-content-image" src={productData.image[0]} alt='' />
                  <div>
                    <p className="cart-content-name">{productData.name}</p>
                    <div className="cart-content-price-size">
                      <p>{currency} {productData.discountPrice}</p>
                      <p className='cart-content-size'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='cart-content-quantity' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={() => updateQuantity(item._id, item.size, 0)} className='cart-content-bin' src={assets.bin_icon} alt="" />
              </div>
            )
          })
        ) : (
          <div className='flex flex-col items-center justify-center h-[70vh]'>
              <h1 className='text-3xl font-bold text-gray-500'>Your Cart is Empty</h1>
              <img src={assets.cart_empty} className='w-[500px]' alt="Empty Cart" />
            </div>
        )
        }
      </div>

      {
        cardData.length > 0 ? (
          <div>
              <div className="cart-amount-container">
        <div className="cart-amount">
          <CartTotal />
        </div>
      </div>
      <div className="cart-payment-container">
        <button onClick={()=>navigate('/place-order')} className="cart-payment-button">PROCEED TO CHECKOUT</button>
      </div>
          </div>
        ) : null
      }

    </div>
  )
}

export default Cart
