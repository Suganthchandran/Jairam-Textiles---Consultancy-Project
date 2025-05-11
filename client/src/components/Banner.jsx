import React from 'react'
import '../styles/Banner.css'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='banner-main'>
    <div className='banner'>
        <div className='banner-left'>
            <div>
                <div className='banner-left-1'>
                    <hr style={{width:'5rem',height:'1px',color:'black'}} />
                    <p>OUR BESTSELLERS</p>
                </div>
                <h1>Latest Arrivals</h1>
                <div className='banner-left-1'>
                    <p>SHOP NOW</p>
                    <hr style={{width:'5rem',height:'1px',color:'black'}} />
                </div>
            </div>
        </div>
        <div className='banner-right'>
            <img src={assets.banner} alt='banner' />
        </div>
    </div>
    </div>
  )
}

export default Banner
