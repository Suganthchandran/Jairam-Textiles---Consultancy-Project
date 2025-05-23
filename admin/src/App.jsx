import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditProduct from './pages/Edit'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

function App() {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");

  useEffect(()=>{
    localStorage.setItem('token',token);
  },[token])

  return (
    <div className='app'>
      <ToastContainer/>
      {token === "" ? <Login setToken={setToken} /> :
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className='app-main'>
            <Sidebar />
            <div className='app-content'>
              <Routes>
                <Route path='/' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/edit/:id' element={<EditProduct token={token} />} />
                <Route path='/orders' element={<Orders token={token} />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </>
      }

    </div>
  )
}

export default App
