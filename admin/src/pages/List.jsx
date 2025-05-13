import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios'
import '../styles/List.css'
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const List = ({ token }) => {

  const [list, setList] = useState([]);

  const currency = '₹'
  const navigate = useNavigate();

  const handleEdit = (productId) => {
    navigate(`/edit/${productId}`);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4001/api/product');
      if (response.data.success) {
        setList(response.data.products);
      }
      else {
        toast.error(response.data.message);
      }
    }
    catch (error) {
      toast.error(error.message);
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post('http://localhost:4001/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchData()
      }
      else {
        toast.error(response.data.message)
      }
    }
    catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <p className='m-4'>All Products List</p>

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
            list.map((item, index) => (
              <div className='list-table-content' key={index}>
                <img style={{ width: '4rem', objectFit: 'cover' }} src={item.image[0]} alt='' />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{currency}{item.discountPrice}</p>
                <div className='list-action-buttons'>
                  <p onClick={() => removeProduct(item._id)} className='list-table-x'><FaTrashAlt /></p>
                  <p onClick={() => handleEdit(item._id)} className='list-table-x'><FaEdit /></p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default List
