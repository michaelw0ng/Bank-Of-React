import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DebitsPage extends Component {
   componentDidMount() {
      let debits_div = document.getElementById("debits");
      let debits = this.props.debits;
      for (let i = 0; i < debits.length; i++)
      {
         let debit = document.createElement("p");
         debit.style.fontWeight = "bold";
         debit.innerHTML = `${debits[i].description}`
         let debit_amount = document.createElement("p");
         debit_amount.innerHTML = `Amount: ${debits[i].amount} Date: ${debits[i].date}`;
         debits_div.appendChild(debit);
         debits_div.appendChild(debit_amount);
      }
      console.log(debits);
   }

  render() {
    return (
        <div>
         <p id="title" style={{fontSize: "larger" }}>Debits</p>
         <br></br>
         <div id="debits">
         </div>
         <br></br>
         <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default DebitsPage;