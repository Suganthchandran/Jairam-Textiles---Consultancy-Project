import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import axios from 'axios'
import '../styles/List.css'

const List = ({token}) => {

    const [list,setList] = useState([]);

    const currency = '₹'

    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:4001/api/product');
          if(response.data.success) {
            setList(response.data.products);
          }
          else {
            toast.error(response.data.message);
          }
        }
        catch(error) {
            toast.error(error.message); 
        }
    }

    const removeProduct = async (id) => {
      try {
        const response = await axios.post('http://localhost:4001/api/product/remove',{id},{headers:{token}})
        if(response.data.success) {
          toast.success(response.data.message);
          await fetchData()
        }
        else {
          toast.error(response.data.message)
        }
      }
      catch(error) {
        toast.error(error.message)
      }
    }

    useEffect(()=> {
      fetchData();
    },[])

  return (
    <>
          <p>All Products List</p>  

          <div className='list-main'>
              <div className='list-table-head'>
                  <b>Image</b>
                  <b>Name</b>
                  <b>Category</b>
                  <b>Price</b>
                  <b>Action</b>
              </div>

              <div className='list-table-content-container'>
                  {
                    list.map((item,index)=>(
                      <div className='list-table-content' key={index}>
                        <img style={{width:'4rem',objectFit:'cover'}} src={item.image[0]} alt=''/>
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>{currency}{item.discountPrice}</p>
                        <p onClick={()=>removeProduct(item._id)} className='list-table-x'>X</p>
                      </div>
                    ))
                  }
              </div>
          </div>
    </>
  )
}

export default List
