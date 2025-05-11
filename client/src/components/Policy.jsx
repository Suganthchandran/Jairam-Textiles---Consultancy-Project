import React from 'react'
import '../styles/Policy.css'
import {assets} from '../assets/assets'

const Policy = () => {
  return (
    <div className='policy'>
        <div>
            <img src={assets.exchange_icon} alt='' />
            <p className='policy-main-text'>Easy Exchange Policy</p>
            <p>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt='' />
            <p className='policy-main-text'>7 Days Return Policy</p>
            <p>We offer 7 Days Return policy</p>
        </div>
        <div>
            <img src={assets.support_img} alt='' />
            <p className='policy-main-text'>Best Customer Support</p>
            <p>We offer 24/7 Best Customer Support</p>
        </div>
    </div>
  )
}

export default Policy
