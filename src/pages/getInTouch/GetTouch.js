import React from 'react'
import style from './get.module.css'
import { NavbarCard } from '../../components/assets/cards/Cards'
import Lists from '../../components/assets/lists/Lists'

function GetTouch() {
  return (
    <div>
      <div className={style.get}>
        <div className={style.getTouch}>
          <h1>Contact Us</h1>
          <h3>And we will get right back to you!</h3>
          <h4>PLEASE FEEL FREE TO CONTACT US BY SENDING US AN EMAIL AND <br />
            WE WILL GET BACK TO YOU ASAP.
          </h4>

          <h6>Email us at contact@radfordspiecompany.co.uk</h6>
          <h2>Radfords Pie Company <br />
            at Faradays Bakery <br />
            376 Heysham Road <br />
            LA3 2BJ Heysham <br />
            Lancashire
          </h2>
        </div>
        <Lists/>
      </div>

      <NavbarCard />
    </div>
  )
}

export default GetTouch 