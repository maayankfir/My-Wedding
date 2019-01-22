import React from 'react';
import { Link } from 'react-router-dom'

class NavBar extends React.Component{

  isLoggedin = () => {
    if (this.props.UserIsAdmin === "mayankfir@gmail.com"){
       return (
         <div className="navbar">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="navbar-brand">
                 <span className="margin-left">  </span> Maayan & Itamar</div>
            </div>

              <ul className="nav navbar-nav">
                <li><Link to="/guests"> Guest list </Link></li>
                <li><Link to="/todo"> To Do </Link></li>
              </ul>
              <ul className="nav navbar-nav navbar-right pull-right">
              <li onClick={this.props.handleLogOut} > <Link to="/" > Log Out </Link></li>
              </ul>
            </div>
          </nav>
          </div>

       )
      } else if (this.props.isUserSignIn) {
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
              <li><Link to="/location"> Location </Link></li>
              <li><Link to="/venue"> The Venue </Link></li>
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
            <li><Link to="/register"> Sign Up </Link></li>
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
