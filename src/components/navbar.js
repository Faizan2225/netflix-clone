import React, { useState, useRef, useEffect } from 'react'

//css
import './navbar.css'

import { Link } from 'react-router-dom'

//notifications fake data
const notifi_data = [
  {
    id: 1,
    title: 'New Arrival,The WasteLand',
    time: '6 days ago',
    image: 'images/notificationsImages/1.jpg',
  },
  {
    id: 2,
    title: 'New Arrival,Mother/Android',
    time: '1 days ago',
    image: 'images/notificationsImages/2.jpg',
  },
  {
    id: 3,
    title: 'New Arrival,Squid Games',
    time: '15 days ago',
    image: 'images/notificationsImages/1.jpg',
  },
  {
    id: 4,
    title: 'Continue Watching, Kurup',
    time: '2 days ago',
    image: 'images/notificationsImages/4.jpg',
  },
  {
    id: 5,
    title: "Netflix Lookahead, Explore what's coming soon",
    time: '0 days ago',
    image: 'images/notificationsImages/5.png',
  },
]

function Navbar() {
  // show hide notifications box
  const [notif, setNotif] = useState(false)

  const notificationsBell = useRef(null)
  const navBarD = useRef(null)

  useEffect(() => {
    if (notif) {
      notificationsBell.current.style.backgroundColor = '#202020'
    } else {
      notificationsBell.current.style.backgroundColor = 'transparent'
    }

    window.addEventListener('scroll', () => {
      navBarD.current.classList.toggle('sticky', window.scrollY > 0)
    })
  })

  return (
    <>
      <navbar className='navbar' ref={navBarD}>
        <div className='logo'>
          <img className='logo-img' src='/images/logo.svg' alt='' />
        </div>
        <div className='nav-links'>
          <ul className='nav-links-ul'>
            <li className='nav-links-li'>
              <Link to='/' className='nav-link-redirect'>
                <h3>Home</h3>
              </Link>
            </li>
            <li className='nav-links-li'>
              <Link to='/' className='nav-link-redirect'>
                <h3>TV Shows</h3>
              </Link>
            </li>
            <li className='nav-links-li'>
              <Link to='/' className='nav-link-redirect'>
                <h3>Movies</h3>
              </Link>
            </li>
            <li className='nav-links-li'>
              <Link to='/' className='nav-link-redirect'>
                <h3>New &amp; Popular</h3>
              </Link>
            </li>
            <li className='nav-links-li'>
              <Link to='/' className='nav-link-redirect'>
                <h3>My List</h3>
              </Link>
            </li>
          </ul>
        </div>
        <div className='nav-tools'>
          <div className='search-box'>
            <img src='/images/search.svg' alt='' />
            <span></span>
            <input type='text' className='search-input' />
          </div>
          <div
            onClick={() => {
              setNotif(!notif)
            }}
            className='notifications-bell cursor-p'
            ref={notificationsBell}
          >
            <img src='./images/bell.svg' alt='' />
          </div>
          {notif && <NotificationsBox dis={notif} />}
          <div className='profiles-ico cursor-p'>
            <img src='./images/profile1.png' alt='' />
          </div>
        </div>
      </navbar>
    </>
  )
}

const NotificationsBox = (dis) => {
  return (
    <>
      <div className='noti-box'>
        {notifi_data.map((obj) => {
          let { id, title, time, image } = obj
          return (
            <div className='notifications-innerbox' key={id}>
              <img src={image} />
              <div className='notifications-headings'>
                <h2>{title.split(',')[0]}</h2>
                <h2>{title.split(',')[1]}</h2>
                <h5>{time}</h5>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Navbar
