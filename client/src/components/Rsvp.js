import React, { Component } from 'react';
import { Input, Row } from 'react-materialize'
// import NavBar from './NavBar'
class Rsvp extends Component {

    state = {
        firstName: '',
        lastName: '',
        attend: false,
        numberAttending: 0,
        email: ''
    }

    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleAttendChange = e => {
      this.setState({
        attend: e.target.value
      });
    }

    handleFormSubmit = e => {
      //fetch POST rsvp
      e.preventDefault()
      fetch(`http://localhost:3000/rsvps`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        Accepts: "application/json"
            },
        body: JSON.stringify({ rsvp: this.state })
      }).then(res => res.json())
        .then(console.log)

        this.setState({
            firstName: '',
            lastName: '',
            attend: '',
            numberAttending: 0,
            email: ''
        })
        console.log('this is state', this.state)
    }



    render() {
        return (
          <div>

          <div className="text-center">
            <div className="container form-container">
              <h3 className="headings">RSVP</h3>
                <Row>
                  <h4> First Name </h4> <Input s={6} validate value={this.state.firstName} name="firstName" onChange={this.handleInputChange}></Input>
                  <h4> Last Name </h4> <Input s={6} validate value={this.state.lastName} name="lastName" onChange={this.handleInputChange}></Input>
                </Row>

                <Row>
                  <h4>Will you be able to attend? </h4>
                  <Input name='group1' type='radio' value='true' onChange={this.handleAttendChange} label='Accepts' />
                  <Input name='group1' type='radio' value='false' onChange={this.handleAttendChange} label='Regretfully, declines' />
                </Row>

                <Row>
                  <h5>How many attendess? </h5>
                  <Input s={6} value={this.state.numberAttending} name="numberAttending" onChange={this.handleInputChange}></Input>
                </Row>

                <Row>
                <h4>Email </h4>
                  <Input s={6} value={this.state.email} name="email" onChange={this.handleInputChange}></Input>
                </Row>
                <div>
                    <button onClick={this.handleFormSubmit} > RSVP </button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Rsvp
