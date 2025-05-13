import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';


const ContactForms = () => {
    return (
        <div className='flex flex-row gap-16'>
            {/* Left Form */}
          <Tilt> 
             <div className='flex max-h-[470px] flex-1 max-w-[390px] flex-col item-center bg-black rounded-lg gap-4 text-white p-4 text-[16px]'>
                <p className='text-center'>CONTACT US</p>

                {/* Phone and Address Info */}
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-row gap-2 items-center'>
                        <MdOutlineMailOutline />
                        <p>jairamtextiles@gmail.com</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaPhoneAlt />
                        <p>9042482004</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaLocationArrow />
                        <div className='flex flex-col'>
                            <p>JAIRAM TEX. 96, Kangayam Main Road</p>
                            <p>Near G.H.S School</p>
                            <p>Arachalur 638101</p>
                        </div>
                    </div>
                </div>

                {/* Social Info */}
                <div className='flex flex-col gap-1'>
                    <p className='text-center'>Social</p>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaTwitter />
                        <p>Twitter</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaFacebook />
                        <p>Facebook</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaYoutube />
                        <p>Youtube</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaVimeoV />
                        <p>Vimeo</p>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <FaInstagram />
                        <p>Instagram</p>
                    </div>
                </div>

                {/* Hours Info */}
                <div className='flex flex-col gap-1'>
                    <p className='text-center'>Hours</p>
                    <div className='flex flex-col'>
                        <p>08.00 - 12.00 Uhr</p>
                        <p>13.00 - 17.00 Uhr</p>
                    </div>
                </div>
            </div>
            </Tilt>
            {/* Right Form */}
            <div className='flex flex-4 max-w-[600px] flex-col gap-4 mt-[100px] text-[16px]'>
                {/* Box Heading */}
                <div>
                    <p className='font-bold'>KEEP IN TOUCH</p>
                </div>

                {/* Box Description */}
                <div className='flex flex-col'>
                    <p className=' justify-center'>We would love to hear from you and answer any questions you may have. You can contact us by filling out the form
                    below, sending us an email, or calling us on our phone number. We will get back to you as soon as possible. You can
                    also follow us on our social media platforms and subscribe to our newsletter to stay updated on our latest news and
                    offers. Thank you for your interest and support.</p>
                </div>

                {/* Main Box */}
                <div className='flex flex-col gap-2'>
                    <div>
                        <input type='text' placeholder='Name' className='w-full border border-gray-300 rounded-sm p-1' />
                    </div>
                    <div>
                        <input type='text' placeholder='Email' className='w-full border border-gray-300 rounded-sm p-1' />
                    </div>
                    <div>
                        <input type='text' placeholder='Subject' className='w-full border border-gray-300 rounded-sm p-1' />
                    </div>
                    <div>
                        <textarea
                            className="w-full h-40 p-1 border border-gray-300 rounded-sm resize-none"
                            placeholder="Type your message here..."
                        ></textarea>
                    </div>
                    <div>
                        <button className='bg-black p-1 rounded-sm text-white font-bold cursor-pointer'>Submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactForms