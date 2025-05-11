import React, { useContext, useEffect, useState } from 'react'
import '../styles/Orders.css'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {

  const {token, currency} = useContext(ShopContext);
  // const  
  const [orderData, setOrderData] = useState([]);
  
  const fetchOrderData = async ()=> {
    try {
      if(!token) {
        return null
      }

      // const response = await axios.post('https://diago-backend.vercel.app/api/order/userorders',{},{headers:{token}})
      const response = await axios.post('http://localhost:4001/api/order/userorders',{},{headers:{token}})
      if(response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod 
            item['date'] = order.date
            allOrdersItem.push(item);
          })
        })
        setOrderData(allOrdersItem.reverse());
      }
    }
    catch(error) {

    }
  }

  useEffect(()=> {
    fetchOrderData();
  },[token])

  return (
    <div className='order'>
        <div  className='order-start'>
          <Title title1={'MY'} title2={'ORDERS'} size={'2.3rem'} position={'start'} />
        </div>

        <div>
          {
            orderData.map((item,index)=>(
                <div key={index} className='order-main'>
                      <div className='order-content'>
                            <img className='order-content-image' src={item.image[0]} alt='' />
                            <div>
                                <p>{item.name}</p>
                                <div style={{marginTop:'0.5rem'}} className='order-info'>
                                    <p style={{fontSize:'1.2rem'}}>{currency} {item.discountPrice}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Size: {item.size}</p>
                                </div>
                                <p style={{color: 'grey',marginTop:'0.5rem'}}>Date: <span style={{color:'grey',fontWeight:'400'}}>{new Date(item.date).toDateString()}</span></p>
                                <p style={{color: 'grey',marginTop:'0.5rem'}}>Payment: <span style={{color:'grey',fontWeight:'400'}}>{item.paymentMethod}</span></p>
                            </div>
                      </div>
                      <div className='order-shipping'>
                            <div className='order-shipping-content'>
                                <p className='order-shipping-circle'></p>
                                <p>{item.status}</p>
                            </div>
                      </div>

                      <div>
                            <button onClick={fetchOrderData} className='order-track'>Track Order</button>
                      </div>
                </div>
            ))
          }
        </div>
    </div>
  )
}

export default Orders
