import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreditsPage extends Component {
  componentDidMount() {
    let credits_div = document.getElementById("credits");
    let credits = this.props.credits;
    for (let i = 0; i < credits.length; i++) {
      let credit = document.createElement("p");
      credit.style.fontWeight = "bold";
      credit.innerHTML = `${credits[i].description}`
      let credit_amount = document.createElement("p");
      credit_amount.innerHTML = `Amount: ${credits[i].amount} Date: ${credits[i].date}`;
      credits_div.appendChild(credit);
      credits_div.appendChild(credit_amount);
    }
  }
  addCredit = () => {
    let amount = document.getElementById("amount");
      let dollar = parseFloat(amount.value).toFixed(2);
      if (dollar === "NaN")
      {
         alert("Please enter correct amount")
         return;
      }
      let credits_div = document.getElementById("credits");
      let credit = document.createElement("p");
      credit.style.fontWeight = "bold";
      let description = document.getElementById("credit");
      credit.innerHTML = `${description.value}`
      let credit_amount = document.createElement("p");
      let date = `${new Date()}`;
      credit_amount.innerHTML = `Amount: ${dollar} Date: ${date}`;
      credits_div.appendChild(credit);
      credits_div.appendChild(credit_amount);
      let newcredit = {
         description: description.value,
         amount: dollar,
         date: date
      }
      this.props.handleNewCredit(newcredit);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "50px" }}>Credits</h1>
        <p>Balance: {this.props.balance.toFixed(2)}</p>
        <div>
          <p>Credit Description</p>
          <input id="credit"></input>
          <p>Amount</p>
          <input id="amount"></input>
          <br></br>
          <br></br>
          <button onClick={this.addCredit}>Submit</button>
        </div>
        <br></br>
        <Link to="/">Return to Home</Link>
        <br></br>
        <div id="credits">
        </div>
        <br></br>
      </div>
    );
  }
}

export default CreditsPage;