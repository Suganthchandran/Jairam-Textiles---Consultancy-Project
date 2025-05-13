import React, { useContext, useEffect, useState } from 'react'
import '../styles/Orders.css'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'
import ConfirmModal from '../components/ConfirmModal'
import Title from '../components/Title';
import axios from 'axios';
import { assets } from '../assets/assets';

const Orders = () => {

  const { token, currency } = useContext(ShopContext);
  // const  
  const [orderData, setOrderData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);


  const fetchOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      // const response = await axios.post('https://diago-backend.vercel.app/api/order/userorders',{},{headers:{token}})
      const response = await axios.post('http://localhost:4001/api/order/userorders', {}, { headers: { token } })
      if (response.data.success) {
        setOrderData(response.data.orders.reverse());
      }
    }
    catch (error) {

    }
  }

  const cancelOrder = async () => {
    try {
      const response = await axios.post('http://localhost:4001/api/order/remove', { id: selectedOrderId }, { headers: { token } });
      if (response.data.success) {
        toast.success(response.data.message);
        setShowModal(false);
        fetchOrderData();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };


  useEffect(() => {
    fetchOrderData();
  }, [token])

  return (
    <div className='order'>
      <div className='order-start'>
        <Title title1={'MY'} title2={'ORDERS'} size={'2.3rem'} position={'start'} />
      </div>

      <div>
        {
          orderData.length > 0 ? (
            orderData.map((order, index) => (
              <div key={index} className='order-main'>
                <div>
                  <div className='m-4'>
                    <h1>Order Track Id : {order._id}</h1>
                  </div>
                  {
                    order.items.map((item, idx) => (
                      <div key={idx} className='order-content'>
                        <img className='order-content-image' src={item.image[0]} alt='' />
                        <div>
                          <p>{item.name}</p>
                          <div style={{ marginTop: '0.5rem' }} className='order-info'>
                            <p style={{ fontSize: '1.2rem' }}>{currency} {item.discountPrice}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Size: {item.size}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>

                {/* <div className='order-shipping'> */}
                <div className='order-shipping-content'>
                  <p className='order-shipping-circle'></p>
                  <p>{order.status}</p>
                </div>


                {/* </div> */}

                <div className='order-details-footer '>
                  <button onClick={fetchOrderData} className='bg-gray-500 hover:bg-gray-600 p-3 px-4 rounded-md text-white font-semibold text-shadow-sm cursor-pointer'>Track Order</button>
                </div>

                <div className='order-shipping-content'>
                  <button
                    className='w-[160px] border p-3 bg-red-500 rounded-md cursor-pointer hover:bg-red-600 text-white text-shadow-sm font-semibold'
                    onClick={() => {
                      setSelectedOrderId(order._id);
                      setShowModal(true);
                    }}
                  >
                    Cancel Order
                  </button>

                </div>
              </div>
            ))
          ) : (
            <div className='flex flex-col items-center justify-center h-[70vh]'>
              <h1 className='text-3xl font-bold text-gray-500'>No Orders were Placed</h1>
              <img src={assets.empty_order} className='w-[500px]' alt="Empty Cart" />
            </div>
          )
        }

      </div>
      <ConfirmModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={cancelOrder}
      />

    </div>
  )
}

export default Orders
