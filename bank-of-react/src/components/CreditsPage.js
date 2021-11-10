import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CreditsPage extends Component {

  render() {
    return (
        <div style={{textAlign: "center"}}>
         Credits
         <br></br>
         <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default CreditsPage;