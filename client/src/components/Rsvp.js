import React, { Component } from 'react';
import { Input, Row } from 'react-materialize'
import ThanksPage from './ThanksPage'
// import NavBar from './NavBar'
class Rsvp extends Component {

    state = {
        user_id: this.props.userObj.id,
        event_id: 1,
        firstname: '',
        lastname: '',
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
        .then(
        this.setState({
            firstname: '',
            lastname: '',
            attend: '',
            attendees: 0,
            comment: '',
            user_id: ''
        }))
      }

    render() {
      // console.log('from RSVP', this.props.userObj.id);
        return (
          <div>

          <div className="text-center">
            <div className="container form-container">
              <h3 className="headings">RSVP</h3>
                <Row>
                  <h4> First Name </h4> <Input validate value={this.state.firstname} name="firstname" onChange={this.handleInputChange}></Input>
                  <h4> Last Name </h4> <Input validate value={this.state.lastname} name="lastname" onChange={this.handleInputChange}></Input>
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
                  <Input type="number" value={this.state.comment} name="comment" onChange={this.handleInputChange}></Input>
                </Row>
                <div>
                  <button onClick={this.handleFormSubmit} > RSVP </button>
                </div>
                </div>
            </div>
              <ThanksPage firstname={this.firstname} />
            </div>
        )
    }
}

export default Rsvp
