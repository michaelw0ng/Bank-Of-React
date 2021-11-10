import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import CreditsPage from './components/CreditsPage';
import DebitsPage from './components/DebitsPage';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }
  }

  addCredit() {

  }

  addDebit() {

  }

  componentDidMount() {

  }

  render() {

    let mockLogIn = (logInInfo) => {
      const newUser = {...this.state.currentUser}
      newUser.userName = logInInfo.userName
      this.setState({currentUser: newUser})
    }

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={mockLogIn} />)
    const CreditsComponent = () => (<CreditsPage />)
    const DebitsComponent = () => (<DebitsPage />)

    return (
      <Router>
        <Switch>
          <div>
            <Route exact path="/" render={HomeComponent} />
            <Route exact path="/userProfile" render={UserProfileComponent} />
            <Route exact path="/login" render={LogInComponent} />
            <Route exact path="/credits" render={CreditsComponent} /> 
            <Route exact path="/debits" render={DebitsComponent} />
          </div>
        </Switch>
      </Router>
    );
  }

}

export default App;