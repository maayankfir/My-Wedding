import React, { Component } from 'react';
import { Input, Row } from 'react-materialize'

class RegisterForm extends Component {

  state = {
    email: '',
    password: ''

  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    // console.log(this.state);

    return (
      <div>
      <br></br>

      <div className="col-md-6 content">
        <form className="form-horizontal" onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>

      <div className="form-group">
        <label className="control-label col-sm-2">Email <span className="glyphicon glyphicon-user"> </span></label>
        <div className="col-sm-8">
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange}
          className="form-control" placeholder="Enter Your Email" />
        </div>
      </div>
      <br></br>
      <div className="form-group">
        <label className="control-label col-sm-2">Password <span className="glyphicon glyphicon-lock"> </span></label>
        <div className="col-sm-8">
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}
          className="form-control"  placeholder="Enter Your Password" />
        </div>
      </div>
      <br></br>
      <div className="form-group">
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-default">Sign Up</button>
        </div>
      </div>
      </form>
      </div>
    </div>
    );
  }
}

export default RegisterForm;
