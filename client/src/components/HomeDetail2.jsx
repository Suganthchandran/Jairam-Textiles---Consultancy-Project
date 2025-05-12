import React from 'react'
import { assets } from '../assets/assets'

const HomeDetail2 = () => {
  return (
    <div className="h-[85dvh] w-full bg-cover bg-no-repeat mt-16 flex flex-col items-center justify-center"
    style={{ backgroundImage: `url(${assets.HomeDetail2BG})` }}>
        <div className='flex flex-row items-center gap-8'>
            <div>
                <img className='w-[500px] mt-[-140px]' src={assets.HomeDetail2} alt='' />
            </div>
            <div className='font-black mt-[-100px] text-[50px]'>
                <p>24/7 Customer</p>
                <p>Service Support</p>
            </div>
        </div>

        <div className='flex flex-col items-center mt-[-80px] text-[#534F4F]'>
            <p>All requests will be processed manually by our developer or our </p>
            <p>supports staff during 24 hours (Monday - Friday, 08.00 - 18.00 GMT+7) </p>
            <p>We will try to reply as fast we can. Will be touch. </p>
        </div>
    </div>
  )
}

export default HomeDetail2