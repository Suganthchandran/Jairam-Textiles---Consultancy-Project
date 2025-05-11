import React from 'react'
import '../styles/NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1 className='newsletter-title'>Subscribe now & get 20% off</h1>
        <p className='newsletter-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, minima quo! Aliquid rem, hic suscipit praese</p>
        <div className='newsletter-form'>
            <input className='newsletter-input' type='text' placeholder='Enter your email' />
            <button className='newspaper-button'>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default NewsLetter
