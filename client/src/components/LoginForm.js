import React, { Component } from 'react';

class LoginForm extends Component {

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
    return (
      <div >
      <br></br>
        <div className="col-md-6 content">
          <form className="form-horizontal" action="/action_page.php" onSubmit={(e) => this.props.handleLoginSubmit(e, this.state )}>

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
            <button type="submit" className="btn btn-default">Log In</button>
          </div>
        </div>
        </form>
        </div>
      </div>

    );
  }

}

export default LoginForm;
