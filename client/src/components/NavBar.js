import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component{

  isLoggedin = () => {
    if(this.props.isUserSignIn) {
      return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">
               <span className="margin-left">  </span> Maayan & Itamar</div>
          </div>

            <ul className="nav navbar-nav">
              <li><Link to="/"> Home </Link></li>
              <li><Link to="/rsvp"> RSVP </Link></li>
              <li><Link to="/about"> About Us </Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right pull-right">
            <li onClick={this.props.handleLogOut} > <Link to="/" > Log Out </Link></li>
            </ul>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">
               <span className="margin-left">  </span> Maayan & Itamar</div>
          </div>

            <ul className="nav navbar-nav navbar-right pull-right">
            <li><Link to="/login"> Log In </Link></li>
            <li><Link to="/register"> Sing Up </Link></li>
            </ul>
          </div>
        </nav>
      )
    }
  }
  render() {
  return (
    <div>
      {this.isLoggedin()}
    </div>
  )
}
}
export default NavBar;
