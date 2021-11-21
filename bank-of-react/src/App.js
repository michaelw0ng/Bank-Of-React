import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";
import CreditsPage from "./components/CreditsPage";
import DebitsPage from "./components/DebitsPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: "joe_shmo",
        memberSince: "07/23/96",
      },
      debits: [],
      credits: [],
    };
  }
  addDebit = (newDebit) => {
    this.setState({ debits: [...this.state.debits, newDebit] });
    console.log(newDebit);
    this.setState({
      accountBalance: this.state.accountBalance - parseFloat(newDebit.amount),
    });
  };
  addCredit = (newCredit) => {
    this.setState({ credits: [...this.state.credits, newCredit] });
    this.setState({
      accountBalance: this.state.accountBalance + parseFloat(newCredit.amount),
    });
  };
  componentDidMount() {
    fetch("https://moj-api.herokuapp.com/debits")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ debits: result });
        for (let i = 0; i < result.length; i++) {
          let amount = result[i].amount;
          this.setState({ accountBalance: this.state.accountBalance - amount });
          // console.log(this.state.accountBalance)
        }
      });
    fetch("https://moj-api.herokuapp.com/credits")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ credits: result });
        for (let i = 0; i < result.length; i++) {
          let amount = result[i].amount;
          this.setState({ accountBalance: this.state.accountBalance + amount });
        }
      });
  }
  render() {
    let mockLogIn = (logInInfo) => {
      const newUser = { ...this.state.currentUser };
      newUser.userName = logInInfo.userName;
      this.setState({ currentUser: newUser });
    };
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance.toFixed(2)} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={mockLogIn} />
    );
    const CreditsComponent = () => (
      <CreditsPage
        credits={this.state.credits}
        handleNewCredit={this.addCredit}
        balance={this.state.accountBalance}
      />
    );
    const DebitsComponent = () => (
      <DebitsPage
        debits={this.state.debits}
        handleNewDebit={this.addDebit}
        balance={this.state.accountBalance}
      />
    );
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path="/credits" render={CreditsComponent} />
          <Route exact path="/debits" render={DebitsComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
