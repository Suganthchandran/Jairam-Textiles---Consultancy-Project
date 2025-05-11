import React from 'react'
import '../styles/Title.css'

const Title = ({title1,title2,size,position}) => {
  return (
    <div className='title-main' style={{fontSize:`${size}`,alignItems:`center`,justifyContent:`${position}`}}>
      <p className='title-p'>{title1}<span className='title-span'>{title2}</span></p>
      <hr className='title-line' />
    </div>
  )
}

export default Title
