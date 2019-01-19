import React, { Component } from 'react';
import CountDown from './components/CountDown';

import './App.css';
import { Link, Redirect, Route, Switch} from 'react-router-dom';
import Auth from './modules/Auth'
import AdminContainer from './containers/AdminContainer'
import RsvpContainer from './containers/RsvpContainer'
import TodosContainer from './containers/TodosContainer'

import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Header from './components/Header'
import Rsvp from './components/Rsvp'
import Location from './components/Location'
import NavBar from './components/NavBar'
import ThanksPage from './components/ThanksPage'

class App extends Component {

  state = {
      auth: Auth.isUserAuthenticated(),
      userObj: [],
      isAdmin: ""
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
      Auth.storeUserInfo(res.user.email, res.user.id, res.user.admin)
      this.setState({
        auth: Auth.isUserAuthenticated(),
        userObj: res.user,
        isAdmin: res.user.email
      })
    }).catch(err => {
      console.log(err)
      alert(err)
    })
    // this.props.history.push("/")
  }

  handleLoginSubmit = (e, data) => {
    e.preventDefault()
    alert('Welcome!')
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
        Auth.storeUserInfo(res.user.email, res.user.id, res.user.admin)
        this.setState({
        auth: Auth.isUserAuthenticated(),
        userObj: res.user,
        isAdmin: res.user.email
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
          userObj: [],
          isAdmin: ""
        })
      }).catch(err => {
        console.log(err)
      })
    }

  render() {
    // console.log('from app', this.state.isAdmin)
    return (
      <div>
        <NavBar isUserSignIn= {this.state.auth} UserIsAdmin={this.state.isAdmin} handleLogOut={this.handleLogOut}  />
        <Header />

          <Route exact path = "/" render = {() => <Dashboard />} />
          <Route exact path = "/register" render = {() => (this.state.auth) ? (<Redirect to="/" />)
             : (<RegisterForm handleRegisterSubmit={this.handleRegisterSubmit}/>)} />
          <Route exact path = "/login" render = {() => {
                if
                ((this.state.isAdmin === "mayankfir@gmail.com") && (this.state.auth)){
                  return (<Redirect to="/admin" />)
                } else if (this.state.auth) {
                  return <Redirect to="/" />
                } else {
                  return <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>
                }
              }
            }
          />
          <Route exact path = "/guests" render = {() => <RsvpContainer userObj={this.props.userObj} />} />
          <Route exact path = "/todo" render = {() => <TodosContainer />} />
          <Route exact path="/logout" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dash" component={Dashboard} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/rsvp" component={() => <Rsvp userObj={this.state.userObj} /> } />
          <Route exact path="/admin" component={() => <AdminContainer userObj={this.state.userObj} />} />
          <Route exact path="/thanks" component={ThanksPage} />
          </div>

      );
    }
  }
export default App
