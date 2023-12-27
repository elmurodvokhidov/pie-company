import React from 'react'
import style from './Cards.module.css'
import img1 from './img/trust-1.png'
import img2 from './img/trust-2.png'
import img3 from './img/trust-3.png'
import img4 from './img/trust-4.png'
import img5 from './img/trust-5.png'
import card1 from './img/circl-card1.png'
import card2 from './img/circle-card2.png'
import card3 from './img/circle-card3.png'
import card4 from './img/circle-card4.png'
import card5 from './img/circle-card5.png'
import card6 from './img/circle-card6.png'
import card7 from './img/circle-christmas-specials.png'
import card8 from './img/circle-delivered.png'
import { NavLink } from 'react-router-dom'

function Cards() {
  return (
    // Footer'dagi card
    <div className="globalCard">
      <div className={style.card}>
        <div className={style.card1}>
          <div className={style.cards}>
            <img src={img1} alt="img1" />
            <h2>HAND-MADE</h2>
            <h5>By one of the Radford’s <br />
              of course!
            </h5>
          </div>
          <div className={style.cards}>
            <img src={img2} alt="img2" />
            <h2>FRESH VEG</h2>
            <h5>Delivered by Jon the local <br />
              veg man
            </h5>
          </div>
          <div className={style.cards}>
            <img src={img3} alt="img3" />
            <h2>LOCAL BUTCHER</h2>
            <h5>Free range chicken breast <br />
              and British beef only
            </h5>
          </div>
          <div className={style.cards}>
            <img src={img4} alt="img4" />
            <h2>JAM PACKED</h2>
            <h5>No holding back -our pies <br />
              are rammed full
            </h5>
          </div>
        </div>
        <div className={style.card2}>
          <img src={img5} alt="img5" />
          <h2>HOT OR COLD</h2>
          <h5>Our pies are perfect <br />
            however you like them
          </h5>
        </div>
      </div>
    </div>

  )
}

export default Cards

// Navbar cards
export function NavbarCard() {
  return (
    <div style={{ width: '100%', height: '550px', background: 'rgba(251, 105, 1, 0.752)', }} className={style.NavbarCard}>
      <h1 style={{ textAlign: 'center', padding: '15px 0 0 0', color: 'black', fontSize: '50px' }}>Our Delicious Pies</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '20px', padding: '30px 200px', }} className="img">
        <NavLink><img style={{ width: '200px', height: '200px' }} src={card1} alt="..." /></NavLink>
        <NavLink><img style={{ width: '200px', height: '200px' }} src={card2} alt="..." /></NavLink>
        <NavLink><img style={{ width: '200px', height: '200px' }} src={card3} alt="..." /></NavLink>
        <NavLink><img style={{ width: '200px', height: '200px' }} src={card4} alt="..." /></NavLink>
        <NavLink><img style={{ width: '200px', height: '200px' }} src={card5} alt="..." /></NavLink>
        <NavLink><img style={{ width: '200px', height: '200px' }} src={card6} alt="..." /></NavLink>
        <NavLink><img style={{ width: '200px', height: '200px' }} src={card7} alt="..." /></NavLink>
        <NavLink><img style={{ width: '200px', height: '200px' }} src={card8} alt="..." /></NavLink>
      </div>
    </div>
  )
};
