import React from 'react'
import Cards from '../assets/cards/Cards'
import style from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import img1 from './img/as-seen-big.png'
import img2 from './img/noel-and-sue.png'

function Footer() {
  return (
    <div className='footer'>
      <Cards />
      <div className={style.footer1}>
        <div className={style.link}>
          <div className={style.sayt}>
            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512">
              <path opacity="1" fill="#1E3050" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="50" width="50" viewBox="0 0 512 512">
              <path opacity="1" fill="#1E3050" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
            </svg>
          </div>
          <div className={style.links}>
            <NavLink>About Us</NavLink>
            <NavLink><li>Provenance</li></NavLink>
            <NavLink><li>Stockists</li></NavLink>
            <NavLink><li>Contact</li></NavLink>
          </div>
        </div>
        <div className={style.footerText}>
          <div className={style.text1}>
            <h2>Heysham Road, Heysham, Morecambe, Lancashire LA3 2BJ</h2>
            <h2>© 2015 Radford’s Pie Company <h4>  Privacy <br /></h4></h2>
            <h4>
              Website Design and Development by Hotfoot</h4>
          </div>
          <div className={style.img}>
            <img className={style.img1} src={img1} alt="" />
            <img className={style.img2} src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer