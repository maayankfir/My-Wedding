import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
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
      <div>
        <Header />
        <Container className="App">
          <Form className="form" onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state )}>
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input className="input"
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Please enter your email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input className="input"
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Button className="button">Register</Button>
          </Form>
        </Container>
      </div>

    );
  }
}

export default RegisterForm;
