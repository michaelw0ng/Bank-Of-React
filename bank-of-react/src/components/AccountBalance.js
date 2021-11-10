import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div style={{textAlign: "center"}}>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;