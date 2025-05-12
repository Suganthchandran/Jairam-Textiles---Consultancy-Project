import React from 'react'
import { assets } from '../assets/assets'
import ContactForms from '../components/ContactForms'

const Contact = () => {
  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden pt-14 flex flex-col items-center gap-6 mb-16'>
        <div>
            <img src={assets.Contact} alt='' />
        </div>

        <div>
            <p className='font-bold text-[45px] mt-[-50px] flex items-center'>Contact Us</p>
        </div>
        <ContactForms/>
    </div>
  )
}

export default Contact