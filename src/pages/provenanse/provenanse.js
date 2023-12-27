import React from "react";
import style from './provenanse.module.css'
import { NavbarCard } from "../../components/assets/cards/Cards";
import img1 from './img/provenance-1.png'
import img2 from './img/provenance-2.png'
import img3 from './img/provenance-3.png'
import Lists from "../../components/assets/lists/Lists";

function Provenanse() {
  return (
    <div>
      <div className={style.Provenanse}>
        <div className={style.provenanse}>
          <h1>Provenanse</h1>
          <h3>Quality assured, fresh produce!</h3>
          <h5>WE PUT TASTE AND QUALITY FIRST AND THAT’S WHY WE USE <br />
            ONLY THE BEST LOCAL, TRUSTED SUPPLIERS
          </h5>
          <div className={style.text1}>
            <div className={style.text2}>
              <h4>H. Greaves & Son</h4>
              <p>Established in the 1930's by Harry <br />
                Greaves, H. Greaves & Son are one of <br />
                the North West leading suppliers of <br />
                high quality meat <br />
                and meat products to both the wholesale <br />
                trade and retail customers.
              </p>
              <h6>Visit website</h6>
            </div>
            <img src={img1} alt="" />
          </div>
          <div className={style.text3}>
            <div className={style.text2}>
              <h4>George Speight & Sons</h4>
              <p>George Speight and Sons Ltd has <br />
                been vegetable traders since 1889 <br />
                offering many years experience of <br />
                supplying high quality produce.
              </p>
              <p>They source produce locally, <br />
                nationally & internationally, which <br />
                enables them to provide some of the <br />
                finest fresh and ready prepared fruit <br />
                and vegetables available in the UK.
              </p>
              <h6>Visit website</h6>
            </div>
            <img src={img2} alt="" />
          </div>

          <div className={style.text4}>
            <div className={style.text2}>
              <h4>Lancaster Brewery</h4>
              <p>Lancaster Brewery is one of the <br />
                largest micro breweries in the <br />
                North West of England and supply <br />
                the ingredients for all our ale pies.
              </p>
              <p>Their success has been built slowly <br />
                through the development of quality <br />
                beers, brewed with the best <br />
                ingredients available anywhere <br />
                in the UK.
              </p>
              <h6>Visit website</h6>
            </div>
            <img src={img3} alt="" />
          </div>
        </div>
        <Lists />
      </div>
      <NavbarCard />
    </div>
  )
}

export default Provenanse;
