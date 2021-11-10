import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class DebitsPage extends Component {
  render() {
    return (
        <div>
         Debits
         <br></br>
         <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default DebitsPage;