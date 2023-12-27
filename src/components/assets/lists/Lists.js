import React from 'react'
import style from './list.module.css'

function Lists() {
  return (
    <div className={style.lists}>
      <div className={style.list1}>
        <h2>Our pies are full to the <br />
          crust!
        </h2>
        <h4>Apparently size really does matter <br />
          Standard Pie: 280g - Family Sized Pie: 1850g
        </h4>
      </div>
      <div className={style.list2}>
        <h1>Things to know</h1>
        <h3>About ordering online</h3>
        <h4>WHERE DO YOU DELIVER?</h4>
        <h5>We cover mainland uk (Scottish Highlands, <br />
          Jersey, Guernsey will incur an extra charge <br />
          please call for details)
        </h5>
        <p>_____________</p>
        <h4>HOW MANY DAYS WILL THE DELIVERY <br />
          TAKE TO ARRIVE?
        </h4>
        <h5>Usually around 4 working days but can take <br />
          longer during busy times.
        </h5>
        <h4>CAN YOU DELIVER ANY DAY OF THE <br />
          WEEK?
        </h4>
        <h5>We send orders out Tuesday Wednesday <br />
          Thursday.
        </h5>
        <p>_____________</p>
        <h4>HOW DO I COOK MY PIES?</h4>
        <h5>You can cook the family pies in just 25 mins at <br />
          180°C / 160°C fan / 350°F gas mark 4 or the <br />
          standard pies for 20 minutes. Pies need to be <br />
          defrosted before reheating.
        </h5>
        <p>_____________</p>
        <h4>HOW SHOULD I STORE MY PIES?</h4>
        <h5>Your pies will arrive in a temperature controlled <br />
          box. They will need to be placed in the fridge on <br />
          arrival before the end of the day.
        </h5>
      </div>

      <div className={style.list3}>
        <h2>Try our other pies!</h2>
        <h3>We have a selection to suit everyone from <br />
          Incredibly Meaty to Totally Veggie!
        </h3>
        <button>Show me!</button>
      </div>
    </div>


  )
}

export default Lists