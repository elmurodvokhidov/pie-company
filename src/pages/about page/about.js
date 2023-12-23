import React from 'react'
import { List, NavbarCard } from '../../components/assets/cards/Cards'
import style from './about.module.css'
import human1 from './img/human4.png'
import human2 from './img/human1.png'
import human3 from './img/human2.png'
import human4 from './img/human3.png'

function About() {
  return (
    <div className={style.navbar}>
      <div className={style.navbar1}>
        <div className={style.navbarLeft}>
          <h1>A Bit About Us</h1>
          <h3>We’re a real family run pie company!</h3>
          <h5>WITH 22 (YUP 22) CHILDREN WE KNOW THE IMPORTANCE OF <br />
            PROVIDING FRESH, HEALTHY FOOD FOR EVERYONE!
          </h5>
          <h6>The Radford Family</h6>
          <h5>Hello, I'm Noel! Some of you might know me and my family from our <br />
            TV programme 15, 16, 17, 18, 19, 20, 21, and 22 Kids and Counting from <br />
            Channel 4 and Channel 5. You guessed it, we are Britain's biggest <br />
            family! <br />
            We have owned our own lovely bakery since 1999 which is how we <br />
            manage to provide for (and feed) our huge and expanding family as <br />
            well as for the local people of Heysham and Morecambe. <br />
            We have set up our on-line pie shop so we can share our very popular <br />
            pies with you all. We're a real family business with both myself and Sue <br />
            working at the helm along with some of our children to help us.
          </h5>
          <div className={style.about}>
            <img src={human1} alt="" />
            <div className={style.text}>
              <h3>Noel</h3>
              <h4>Hi I’m Noel and I’ve worked as a baker for over <br />
                25 years having worked in several bakeries over <br />
                the years from a trainee to a manager and for the <br />
                last 16 years owner of our bakery in Heysham, <br />
                Lancashire. My job is to ensure the smooth <br />
                running of the business and future <br />
                developments such as creating new pie recipes.
              </h4>
            </div>
          </div>
          <div className={style.about}>
            <img src={human2} alt="" />
            <div className={style.text}>
              <h3>Sue</h3>
              <h4>This is my wife Sue. When she doesn’t have her <br />
                hand full with the kids Sue over sees all the <br />
                orders coming in and going out and acts as chief <br /> taste tester! If a pie isn’t up to scatch we will <br />
                know about it!
              </h4></div>
          </div>
          <div className={style.about}>
            <img src={human3} alt="" />
            <div className={style.text}>
              <h3>Chloe</h3>
              <h4>My daughter Chloe is the next generation of <br />
                artisan pie maker! She has helped me make pies <br />
                in our bakery shop for 5 years and knows the <br />
                secret to a good pie is patience. She also makes <br />
                suggestions for delicious new recipes.
              </h4>
            </div>
          </div>
          <div className={style.about}>
            <img src={human4} alt="" />
            <div className={style.text}>
              <h3>Daniel</h3>
              <h4>Daniel helps Sue and I with anything from <br />
                taking orders, preparing pies ready for delivery <br />
                to making sure everywhere is spotless after a <br />
                long day of pie-making. It’s no secret that he’d <br />
                rather be a professional football player!
              </h4>
            </div>
          </div>

        </div>
        <List/>
      </div>


      <NavbarCard />
    </div>
  )
}

export default About