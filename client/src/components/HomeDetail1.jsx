import React from 'react'
import { assets } from '../assets/assets'

const HomeDetail1 = () => {
  return (
    <div className='flex flex-col item-center justify-center gap-6 mt-16'>
        <div className='flex flex-row items-center justify-center gap-8'>
            <div>
                <img className='w-[600px]' src={assets.HomeDetail1} alt='' />
            </div>
            <div className='flex flex-col items-start gap-1 font-black text-[48px]'>
                <p>Order any</p>
                <p className='text-[#24722E]'>Time you Like <span className='text-[#57BD99]'>&</span></p>
                <p className='text-[#57BD99]'>What you Like.</p>
            </div>
        </div>
        
        <div className='flex justify-center'>
            <p className=''>Quick and easy to use the most important thing for selling products on online!</p>
        </div>
    </div>
  )
}

export default HomeDetail1