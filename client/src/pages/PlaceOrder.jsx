import React, { useContext, useState } from 'react'
import '../styles/PlaceOrder.css'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  
  const [method, setMethod] = useState('cod');
  const {navigate, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (e)=> {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];

      for(const items in cartItems) {
        for(const item in cartItems[items]) {
          if(cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items));
            if(itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch(method) {

        // API Calls for COD
        case 'cod':
          // const response = await axios.post('https://diago-backend.vercel.app/api/order/place',orderData,{headers:{token}})
          const response = await axios.post('http://localhost:4001/api/order/place',orderData,{headers:{token}})
          if(response.data.success) {
            setCartItems({})
            navigate('/orders');
          }
          else {
            toast.error(response.data.message);
          }
          break;
        
        case 'stripe':
          // const responseStripe = await axios.post('https://diago-backend.vercel.app/api/order/stripe',orderData,{headers:{token}})
          const responseStripe = await axios.post(' http://localhost:4001/api/order/stripe',orderData,{headers:{token}})
          if(responseStripe.data.success) {
            const {session_url} = responseStripe.data
            window.location.replace(session_url);
          }
          else {
            toast.error(responseStripe.data.message)
          }
          break;

        default:
          break;
      }

    }
    catch(error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='placeorder'>

      {/* Left Side */}
      <div className='placeorder-left'>
        <div style={{ margin: '2rem 0' }}>
          <Title title1={'DELIVERY'} title2={'INFORMATION'} size={'2rem'} position={'start'} />
        </div>
        <div className='placeorder-info-form-pair'>
          <input required className='placeorder-info-form-input' onChange={onChangeHandler} name='firstName' value={formData.firstName} type='text' placeholder='First name' />
          <input required className='placeorder-info-form-input' onChange={onChangeHandler} name='lastName' value={formData.lastName} type='text' placeholder='Last name' />
        </div>
        <input required className='placeorder-info-form-input' onChange={onChangeHandler} name='email' value={formData.email} type='text' placeholder='Email address' />
        <input required className='placeorder-info-form-input' onChange={onChangeHandler} name='street' value={formData.street} type='text' placeholder='Street' />
        <div className='placeorder-info-form-pair'>
          <input required className='placeorder-info-form-input' onChange={onChangeHandler} name='city' value={formData.city} type='text' placeholder='City' />
          <input required className='placeorder-info-form-input' onChange={onChangeHandler} name='state' value={formData.state} type='text' placeholder='State' />
        </div>
        <div className='placeorder-info-form-pair'>
          <input required className='placeorder-info-form-input' onChange={onChangeHandler} name='zipcode' value={formData.zipcode} type='number' placeholder='Zipcode' />
          <input required className='placeorder-info-form-input' onChange={onChangeHandler} name='country' value={formData.country} type='text' placeholder='Country' />
        </div>
        <input required className='placeorder-info-form-input' onChange={onChangeHandler} name='phone' value={formData.phone} type='number' placeholder='Phone' />
      </div>

      {/* Right Side */}
      <div className='placeorder-right'>

        <div className='placeorder-amount'>
          <CartTotal />
        </div>

        <div className='placeorder-payment-main'>
          <Title title1={'PAYMENT'} title2={'METHOD'} size={'2rem'} position={'start'} />

          {/* Payment Method Selection */}

          <div className='placorder-payment-method-list'>
            <div onClick={() => setMethod('stripe')} className='placeorder-payment-method'>
              <p className={`placeorder-payment-method-ptag ${method === 'stripe' ? 'placeorder-method-active' : ''} `}></p>
              <img className='placeorder-payment-image' src={assets.stripe_logo} alt='' />
            </div>
            {/* <div onClick={() => setMethod('razorpay')} className='placeorder-payment-method'>
              <p className={`placeorder-payment-method-ptag ${method === 'razorpay' ? 'placeorder-method-active' : ''} `}></p>
              <img className='placeorder-payment-image' src={assets.razorpay_logo} alt='' />
            </div> */}
            <div onClick={() => setMethod('cod')} className='placeorder-payment-method'>
              <p className={`placeorder-payment-method-ptag ${method === 'cod' ? 'placeorder-method-active' : ''} `}></p>
              <p className='placeorder-payment-cod'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="placeorder-payment-container">
            <button type='submit' className="placeorder-payment-button">PLACE ORDER</button>
          </div>

        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
