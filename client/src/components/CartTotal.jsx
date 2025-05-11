import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import '../styles/CartTotal.css'
import Title from './Title';

const CartTotal = () => {

    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className='carttotal'>
        <div>
            <Title title1={'CART'} title2={'TOTAL'} size={'2rem'} position={'start'}/>
        </div>

        <div className='carttotal-main'>
                <div className='carttotal-amount'>
                    <p>Subtotal</p>
                    <p>{currency} {getCartAmount()}.00</p>
                </div>

                <hr />
                
                <div className='carttotal-amount'>
                    <p>Shipping Fee</p>
                    <p>{currency} {delivery_fee}.00</p>
                </div>

                <hr/>

                <div className='carttotal-amount' style={{fontWeight:'700'}}>
                    <p>Total</p>
                    <p>{currency} {getCartAmount() == 0 ? 0 : getCartAmount()+delivery_fee}.00</p>
                </div>
        </div>
    </div>
  )
}

export default CartTotal
