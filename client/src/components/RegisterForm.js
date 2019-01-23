import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from './Header'
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
    <div className="text-center">
    <Header />
      <br></br>
      <br></br>
      <Form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state )} inline>
        <FormGroup className="mb-10 mr-sm-2 mb-sm-2">
         <Label for="exampleEmail" className="mr-sm-6">Email</Label><br></br>
         <Input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleEmail" placeholder="Enter Your Email.." />
        </FormGroup>
        <br></br>
        <br></br>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
         <Label for="examplePassword" className="mr-sm-2">Password</Label><br></br>
         <Input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <br></br>
        <br></br>
        <Button color="default" size="md">Register</Button>
      </Form>
      </div>
    );
  }
}

export default RegisterForm;
