import React from 'react'
import style from './Cards.module.css'
import img1 from './img/trust-1.png'
import img2 from './img/trust-2.png'
import img3 from './img/trust-3.png'
import img4 from './img/trust-4.png'
import img5 from './img/trust-5.png'

function Cards() {
  return (
    // Footer'dagi card
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
    
    )
}

export default Cards