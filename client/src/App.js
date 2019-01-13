import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import Auth from './modules/Auth'
import RsvpList from './components/RsvpList'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Header from './components/Header'
import Rsvp from './components/Rsvp'
import AboutUs from './components/AboutUs'



class App extends Component {

  state = {
      auth: Auth.isUserAuthenticated()
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
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
    }).catch(err => {
      console.log(err)
    })
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
        console.log(res)
      Auth.authenticateToken(res.token)
      this.setState({
        auth: Auth.isUserAuthenticated()
      })
      }).catch(err => {
        console.log(err)
      })
    }

    handleLogOut = () => {
      fetch('/logout', {
        method: 'DELETE',
        headers: {
          token: Auth.getToken(),
          'Authorization': `Token ${Auth.getToken()}`
        }
      }).then(res => {
        Auth.deauthencateToken()
        this.setState({
          auth: Auth.deauthenticateUser()
        })
      }).catch(err => {
        console.log(err)
      })
    }


  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
            <div className="navbar-header">
            <div className="navbar-brand">
            <span className="margin-left">  </span> Maayan & Itamar</div>
            </div>
            <ul className="nav navbar-nav">
            <li><Link to="/" > Home </Link></li>
            <li><Link to="/rsvp"> RSVP </Link></li>
            <li><Link to="/about"> About Us </Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right pull-right">
            <li><Link to="/login"> Log In </Link></li>
            <li><Link to="/register"> Sing Up </Link></li>
            <li><span onClick={this.handleLogOut}>
            <Link to="/"> Log Out </Link>
             </span></li>
            </ul>
        </div>
      </nav>
        <Header />
        <Switch>
        <Route exact path="/rsvps" render= {() =>
          <RsvpList />} />
        <Route exact path="/register"
         render = {() => (this.state.auth)
           ? <Redirect to="/register" />
           : <RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>} />
         <Route exact path="/login"
          render = {() => (this.state.auth)
            ? <Redirect to="/register" />
            : <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>}  />
          <Route exact path="/"
            render={() => <Dashboard />}/>

            // <Route exact path="/home" component={Home} />
            // <Route exact path="/dash" component={Dashboard} />
            // <Route exact path="/about" component={AboutUs} />
            // <Route exact path="/rsvp" component={Rsvp} />
            // <Route exact path="/dash" component={Dashboard} />
            // <Route exact path="/admin" component={RsvpList} />

            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
