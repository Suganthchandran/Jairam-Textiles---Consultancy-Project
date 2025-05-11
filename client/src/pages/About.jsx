import React from 'react'
import Title from '../components/Title'
import '../styles/About.css'
import {assets} from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div className='about'>
        <div>
           <Title title1={'ABOUT'} title2={'US'} size={'2.3rem'} position={'center'} />
        </div>
        <div className='about-content'>
            <div>
              <img className='about-content-image' src={assets.about_img} alt='About Image' />
            </div>
            <div className='about-content-para-container'>
              <p>Welcome to Diago, your ultimate destination for stylish and affordable clothing. At Diago, we believe fashion is a reflection of who you are, and our collections are designed to help you express your unique style with confidence. Whether you're looking for the latest trends or timeless classics, our range includes everything from casual wear to sophisticated pieces for special occasions. We carefully select high-quality fabrics and designs to ensure that each item is not only fashionable but also comfortable and durable, providing exceptional value for every purchase.</p>
              <p>At Diago, our customers are at the heart of everything we do. We are committed to delivering a seamless shopping experience through outstanding customer service, fast and reliable shipping, and a wide variety of sizes to ensure everyone finds their perfect fit.</p>
              <b className='about-content-mission-head'>Mission</b>
              <p>At Diago, our mission is to empower individuals through fashion by offering high-quality, affordable clothing that reflects personal style and confidence. We are committed to providing exceptional customer experiences, inclusive sizing, and sustainable practices, all while making the latest trends accessible to everyone.</p>
            </div>
        </div>
        <div className='about-content-choose'>
              <div>
              <Title title1={'WHY'} title2={'CHOOSE US '} size={'2.3rem'} position={'start'} />
              </div>
              <div className='about-content-choose-box-container'>
                  <div className='about-content-choose-box'>
                    <b className='about-content-choose-box-head'>Quality Assurance:</b>
                    <p>At Diago, we prioritize delivering top-notch quality in every product. Each item is crafted from carefully selected fabrics and undergoes strict quality checks to ensure durability, comfort, and flawless design. We are dedicated to providing clothing that not only looks stylish but also offers long-lasting value for our customers.</p>
                  </div>
                  <div className='about-content-choose-box'>
                    <b className='about-content-choose-box-head'>Convenience:</b>
                    <p>At Diago, we aim to make your shopping experience as seamless and convenient as possible. Our easy-to-navigate website, fast and reliable shipping, and secure payment options ensure a hassle-free process from browsing to delivery. With just a few clicks, you can explore the latest styles and have them delivered right to your doorstep, saving you time and effort.</p>
                  </div>
                  <div className='about-content-choose-box'>
                    <b className='about-content-choose-box-head'>Exceptional Customer Service:</b>
                    <p>At Diago, our customers are our top priority. We are committed to providing exceptional customer service, ensuring that your shopping experience is smooth and enjoyable. Our dedicated support team is always ready to assist with any questions, concerns, or issues you may have, offering quick and helpful responses. Your satisfaction is our goal, and we strive to exceed your expectations at every step.</p>
                  </div>
              </div>
        </div>
        <NewsLetter/>
    </div>
  )
}

export default About
