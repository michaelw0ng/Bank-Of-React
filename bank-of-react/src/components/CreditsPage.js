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

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "50px" }}>Credits</h1>
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