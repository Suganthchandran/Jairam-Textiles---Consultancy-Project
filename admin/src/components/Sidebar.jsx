import React from 'react'
import '../styles/Sidebar.css'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-main'>
            <NavLink className='sidebar-elements' to="/add">
                <img src={assets.add_icon} alt='Add Icon' />
                <p className='sidebar-content-text'>Add Items</p>
            </NavLink>

            <NavLink className='sidebar-elements' to="/list">
                <img src={assets.order_icon} alt='Add Icon' />
                <p className='sidebar-content-text'>List Items</p>
            </NavLink>

            <NavLink className='sidebar-elements' to="/orders">
                <img src={assets.order_icon} alt='Add Icon' />
                <p className='sidebar-content-text'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar
