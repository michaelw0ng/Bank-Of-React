import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CreditsPage extends Component {

  render() {
    return (
        <div>
         Credits
         <br></br>
         <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default CreditsPage;