import React, { Component } from 'react';
import { Input, Row } from 'react-materialize'
// import NavBar from './NavBar'
class Rsvp extends Component {


    state = {
        user_id: this.props.userObj.id,
        event_id: 1,
        firstName: '',
        lastName: '',
        attendees: 0,
        comment: '',
        rsvp: false,
    }

    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleAttendChange = e => {
      this.setState({
        rsvp: e.target.value
      });
    }

    handleFormSubmit = e => {
      e.preventDefault()
      fetch(`/rsvps`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        Accepts: "application/json"
            },
        body: JSON.stringify({ rsvp: this.state })
          })
        // .then(res => res.json())
        .then(
        this.setState({
            firstName: '',
            lastName: '',
            attend: '',
            attendees: 0,
            comment: '',
            user_id: ''
        }))
      }


    render() {
      console.log('from RSVP', this.props.userObj.id);
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
                  <Input value={this.state.attendees} name="attendees" onChange={this.handleInputChange}></Input>
                </Row>

                <Row>
                <h4> Any Comments? </h4>
                  <Input value={this.state.comment} name="comment" onChange={this.handleInputChange}></Input>
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
