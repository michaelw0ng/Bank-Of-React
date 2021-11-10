import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DebitsPage extends Component {
   constructor () {
      super()
      this.state = {
        newDebits: []
      }
    }

   componentDidMount() {
      let debits_div = document.getElementById("debits");
      let debits = this.props.debits;
      for (let i = 0; i < debits.length; i++) {
         let debit = document.createElement("p");
         debit.style.fontWeight = "bold";
         debit.innerHTML = `${debits[i].description}`
         let debit_amount = document.createElement("p");
         debit_amount.innerHTML = `Amount: ${debits[i].amount} Date: ${debits[i].date}`;
         debits_div.appendChild(debit);
         debits_div.appendChild(debit_amount);


      }
   }

   addDebit = () => {
      let amount = document.getElementById("amount");
      let dollar = parseFloat(amount.value).toFixed(2);
      if (dollar === "NaN")
      {
         alert("Please enter correct amount")
         return;
      }
      let debits_div = document.getElementById("debits");
      let debit = document.createElement("p");
      debit.style.fontWeight = "bold";
      let description = document.getElementById("debit");
      debit.innerHTML = `${description.value}`
      let debit_amount = document.createElement("p");

      let date = `${new Date()}`

      debit_amount.innerHTML = `Amount: ${dollar} Date: ${date}`;
      debits_div.appendChild(debit);
      debits_div.appendChild(debit_amount);
      let newDebit = {
         description: description.value,
         amount: dollar,
         date: date
      }
      this.props.handleNewDebit(newDebit);
   }

   render() {
      return (
         <div style={{textAlign: "center"}}>
            <h1 id="title" style={{ fontSize: "50px" }}>Debits</h1>
            <p>Balance: {this.props.balance}</p>
            <div>
               <p>Debit Description</p>
               <input id="debit"></input>
               <p>Amount</p>
               <input id="amount"></input>
               <br></br>
               <br></br>
               <button onClick={this.addDebit}>Submit</button>
            </div>
            <br></br>
            <Link to="/">Return to Home</Link>
            <br></br>
            <div id="debits">
            </div>
            <br></br>
         </div>
      );
   }
}

export default DebitsPage;