import React from 'react'

//css
import './banner.css'

function Banner() {
  return (
    <>
      <div className='banner'>
        <img src='/images/banner.jpg' alt='' className='banner-bg' />
        <div className='banner-logo'>
          <img src='/images/bannerlogo.webp' className='banner-logo-img' />
          <p>
            A notorious gang in 1919 Birmingham, England, is led by the fierce
            Tommy Shelby, a crime boss set on moving up in the world no matter
            the cost.
          </p>
          <div className='banner-btns'>
            <button className='banner-playbutton banner-btn'>Play</button>
            <button className='banner-infobutton banner-btn'>More Info</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
