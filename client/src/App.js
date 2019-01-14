import React, { Component } from 'react';

import './App.css';
import { Link, Redirect, Route, Switch} from 'react-router-dom';
import Auth from './modules/Auth'
import RsvpList from './components/RsvpList'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Header from './components/Header'
import Rsvp from './components/Rsvp'
import AboutUs from './components/AboutUs'
import NavBar from './components/NavBar'


class App extends Component {

  state = {
      auth: Auth.isUserAuthenticated(),
      userObj: {},
      toggle: false
    }


  handleRegisterSubmit = (e, data) => {
    e.preventDefault()
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify({ user: data }),
      headers: {
      "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(res => {
      Auth.authenticateToken(res.token)
      Auth.storeUserInfo(res.user.email, res.user.id)
      this.setState({
        auth: Auth.isUserAuthenticated(),
        userObj: res.user
      })
    }).catch(err => {
      console.log(err)
    })
    // this.props.history.push("/")
  }

  handleLoginSubmit = (e, data) => {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
      }).then(res => res.json())
      .then(res => {
        // console.log(res)
        Auth.authenticateToken(res.token)
        Auth.storeUserInfo(res.user.email, res.user.id)
        this.setState({
        auth: Auth.isUserAuthenticated(),
        userObj: res.user
        })
      }).catch(err => {
        console.log(err)
      })
      // this.props.history.push("/")
    }

    handleLogOut = () => {

      // debugger
      fetch('/logout', {
        method: 'DELETE',
        headers: {
          token: Auth.getToken(),
          'Authorization': `Token ${Auth.getToken()}`
        }
      }).then(res => {
        Auth.deauthencateToken()
        this.setState({
          auth: Auth.isUserAuthenticated(),
          userObj: {}
        })
      }).catch(err => {
        console.log(err)
      })
    }


  render() {
    // console.log('from app', this.state.userObj)
    return (
      <div>
        <NavBar isUserSignIn= {this.state.auth} handleLogOut={this.handleLogOut} />
        <Header />

        <Route exact path = "/" render = {() => <Dashboard />} />
        <Route exact path = "/register" render = {() => (this.state.auth) ? (<Redirect to="/" />)
           : (<RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>)} />
        <Route exact path = "/login" render = {() => (this.state.auth) ? <Redirect to="/" />
            : <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>}/ >

            <Route exact path="/logout" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/dash" component={Dashboard} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/rsvp" component={() => <Rsvp userObj={this.state.userObj} /> } />
            <Route exact path="/admin" component={RsvpList} />




      </div>

    );
  }
}
export default App;

// <Route exact path="/register" render = {() => (this.state.auth) ? (<Redirect to="/register" />)
//    : (<RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>)} />
// </div>
// <div>
//   <Nav handleLogout=  {this.handleLogout} isUserSignIn = {this.state.auth} />
//   <Route exact path = "/" render = {() => <Home userObj = {this.state.userObj} friendsList = {this.state.friendsList}/>} />
//   <Route path = "/signup" render = {() => <SignUp createAccount = {this.createAccount}/>}/ >
//   <Route path = "/login" render = {() => <Login handleLoginSubmit = {this.handleLoginSubmit}/>}/ >
//   </div>
// <Router>
//   <div className="App">
//     <nav className="navbar navbar-inverse navbar-fixed-top">
//       <div className="container-fluid">
//       <div className="navbar-header">
//       <div className="navbar-brand">
//       <span className="margin-left">  </span> Maayan & Itamar</div>
//       </div>
//       <ul className="nav navbar-nav">
//       <li><Link to="/" > Home </Link></li>
//       <li><Link to="/rsvp"> RSVP </Link></li>
//       <li><Link to="/about"> About Us </Link></li>
//       </ul>
//       <ul className="nav navbar-nav navbar-right pull-right">
//       <li><Link to="/login"> Log In </Link></li>
//       <li><Link to="/register"> Sing Up </Link></li>
//       <li><span onClick={this.handleLogOut}>
//       <Link to="/"> Log Out </Link>
//        </span></li>
//       </ul>
//   </div>
// </nav>
//   <Header />
//   <Switch>
//   <Route exact path="/rsvps" render= {() =>
//     <RsvpList />} />
  // <Route exact path="/register" render = {() => (this.state.auth) ? (<Redirect to="/register" />)
  //    : (<RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>)} />
  //  <Route exact path="/login"
  //   render = {() => (this.state.auth)
  //     ? <Redirect to="/register" />
  //     : <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>}  />
  //   <Route exact path="/"
  //     render={() => <Dashboard />}/>
//
//       // <Route exact path="/home" component={Home} />
//       // <Route exact path="/dash" component={Dashboard} />
//       // <Route exact path="/about" component={AboutUs} />
//       // <Route exact path="/rsvp" component={Rsvp} />
//       // <Route exact path="/dash" component={Dashboard} />
//       // <Route exact path="/admin" component={RsvpList} />
//
//       </Switch>

// </Router>
