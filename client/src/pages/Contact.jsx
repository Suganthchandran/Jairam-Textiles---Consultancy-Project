import React from 'react'
import '../styles/Contact.css'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className='contact'>
        <Title title1={'CONTACT'} title2={'US'} size={'2.3rem'} position={'center'} />
        <div className='contact-main'>
          <div>
            <img className='contact-main-image' src={assets.contact_img} />
          </div>
          <div className='contact-content'>
              <p className='contact-content-head'>Our Store</p>
              <div>
              <p>2f/746 P&T Colony</p>
              <p>14th Street, Thoothukudi - 628008</p>
              </div>
              <div>
              <p>Tel: (+91) 9042482004</p>
              <p>Email: suganthchandran07@gmail.com</p>
              </div>
              <p className='contact-content-head'>Carrers at Diago</p>
              <p className='contact-jobs-desc'>Learn more about our teams and job openings.</p>
              <button className='contact-button'>Explore Jobs</button>
          </div>
        </div>
        <NewsLetter />
    </div>
  )
}

export default Contact
