import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { assets } from '../assets/assets';
import '../styles/Orders.css'

const Orders = ({token}) => {

  const [orders, setOrders] = useState([]);
  const currency = '$'

  const fetchAllOrders = async ()=> {
    if(!token) {
      return null
    }
    try {
        const response = await axios.post('https://diago-backend.vercel.app/api/order/list',{},{headers:{token}})
        if(response.data.success) {
          setOrders(response.data.orders.reverse());
        }
        else {
          toast.error(response.data.message)
        }
    }
    catch(error) {
      console.log(erro)
      toast.error(error.message);
    }
  }

  const statusHandler = async (e, orderId)=> {
    try {
      const response = await axios.post('https://diago-backend.vercel.app/api/order/status',{orderId, status: e.target.value},{headers:{token}});
      if(response.data.success) {
        await fetchAllOrders();
      }
      else {
        toast.error(response.data.message);
      }
    }
    catch(error) {
      toast.error(error.message);
    }
  }

  useEffect(()=> {
    fetchAllOrders();
  },[token])

  return (
    <div> 
        <h3>Order Page</h3>
        <div>
          {
            orders.map((order,index)=>(
              <div className='orders-container' key={index}>
                  <img src={assets.parcel_icon} />
                  <div>
                  <div>
                    {
                      order.items.map((item,index)=>{
                          if(index == order.items.length-1) {
                            return <p  className='orders-content-pro_name' key={index}>{item.name} x {item.quantity} <span>{item.size}</span></p>
                          }
                          else {
                            return <p className='orders-content-pro_name' key={index}>{item.name} x {item.quantity} <span>{item.size},</span></p>
                          }
                      })
                    }
                  </div>
                  <p className='order-content-name'>{order.address.firstName + " " + order.address.lastName}</p>
                  <div>
                      <p>{order.address.street + ","}</p>
                      <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                  </div>
                  <p>{order.address.phone}</p>
              </div>
                    <div>
                        <p className='order-content-items'>Items : {order.items.length}</p>
                        <p style={{marginBottom:'0.05rem'}}>Method : {order.paymentMethod}</p>
                        <p style={{marginBottom:'0.07rem'}}>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                        <p>Date: {new Date(order.date).toLocaleDateString()}</p>
                    </div>
                    <p>{currency} {order.amount}</p>
                    <select onChange={(e)=>statusHandler(e,order._id)} value={order.status} className='order-content-select'>
                        <option value="Order Placed">Order Placed</option>
                        <option value="Packing">Packing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Out for delivery">Out for delivery</option>
                        <option value="Delivered">Delivered</option>
                    </select>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Orders
