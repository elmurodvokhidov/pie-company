import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import img from './img/navbarlogo.png'
// import SimpleSlider from '../Slider/Slider'

function Navbar() {
  return (
    <div className={style.Navbar}>
      <div className={style.navbar}>
        <Link to='/'><img src={img} alt="" /></Link>
        <div className={style.navbarText}>
          <div className={style.text1}>
            <NavLink><h2>Yummy Pies</h2></NavLink>
            <NavLink to='about'><h2>A Bit About Us</h2></NavLink>
          </div>
          <div className={style.text1}>
            <NavLink to='provenanse'><h2>Provenance</h2></NavLink>
            <NavLink to='GetTouch'><h2>Get In Touch</h2></NavLink>
          </div>
        </div>
      </div>
      {/* <SimpleSlider/> */}
    </div>
  )
}

export default Navbar