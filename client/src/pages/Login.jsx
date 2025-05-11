import React, { useContext, useEffect, useState } from 'react'
import '../styles/Login.css'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState,setCurrentState] = useState('Login');

  const {token, setToken, navigate} = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
        if(currentState === 'Sign Up') {
          const response = await axios.post('https://diago-backend.vercel.app/api/user/register',{name,email,password});
          if(response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token',response.data.token);
          }
          else {
            toast.error(response.data.message);
          }
        }
        else {
          const response = await axios.post('https://diago-backend.vercel.app/api/user/login',{email,password});
          if(response.data.success) {
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token);
          }
          else {
            toast.error(response.data.message);
          }
        }
     }
     catch(error) {
        toast.error(error.message)
     }
  }

  useEffect(()=>{
    if(token) {
      navigate('/');
    }
  },[token])

  return (
    <form onSubmit={handleSubmit} className='login-form'>
        <div className='login-heading-container'>
            <Title title2={currentState} size={'2.5rem'} position={'start'}/>
        </div>
        {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type='text' placeholder='Name' className='login-input' required /> }
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type='email' placeholder='Email' className='login-input' required />
        <input onChange={(e)=> setPassword(e.target.value)} value={password} type='password' placeholder='Password' className='login-input' required />
        <div className='login-forgot-password'>
          <div><p style={{cursor:'pointer'}}>Forgot your Password ?</p></div>
          <div>
            {
              currentState === 'Login' 
              ?
              <p style={{cursor:'pointer'}} onClick={()=> setCurrentState('Sign Up')}>Create Account</p>
              :
              <p style={{cursor:'pointer'}} onClick={()=> setCurrentState('Login')}>Login Here</p>
            }
          </div>
        </div>
        <button className='login-button'>{currentState === 'Login' ? 'Login' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
