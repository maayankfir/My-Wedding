import React, { Component } from 'react';
// import { Input, Row } from 'react-materialize'
import { Redirect} from 'react-router-dom';
import Header from '../Header'
import { Row, Col, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
class Rsvp extends Component {

    state = {
        user_id: this.props.userObj.id,
        event_id: 1,
        firstname: '',
        lastname: '',
        attendees: 0,
        comment: '',
        rsvp: false,
        toThanksPage: false,
        // selectedOption: false

    }

    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleAttendChange = e => {
      this.setState({
        rsvp: e.target.value,
        // selectedOption: this.state.selectedOption
      });
    }

    handleFormSubmit = e => {
      e.preventDefault()
      alert('RSVP submitted!')
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
            user_id: '',
            toThanksPage: true,
        }))
      }

      isAttend = () => {
        if (this.state.rsvp === 'true') {
          return (
          <div>
         <FormGroup>
           <Label for="exampleNumber">How many attendess?</Label>
           <Input
            className="input"
             type="number"
             min="1"
             name="attendees"
             id="exampleNumber"
             placeholder="1"
             value={this.state.attendees}
              onChange={this.handleInputChange} require
              />
             </FormGroup>
          </div>
        )}
      }


    render() {

      if (this.state.toThanksPage === true) {
        return <Redirect to='/thanks' />
      }
        return (
          <div>
          <Header/>
          <Form className="rsvpForm">
          <FormGroup>
            <Label for="exampleCheckbox">Will you be able to attend?</Label>
            <div>
              <CustomInput type="radio" id="exampleCustomRadio" value='true' onChange={this.handleAttendChange} label='Accepts' name="customRadio" />
              <CustomInput type="radio" id="exampleCustomRadio2" value='false' onChange={this.handleAttendChange} label='Regretfully, declines' name="customRadio"  />
            </div>
          </FormGroup>

            {this.isAttend()}

            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstname">First Name</Label>
                  <Input className="input" type="firstname" value={this.state.firstname} onChange={this.handleInputChange} name="firstname" id="firstname" placeholder="" require/>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastname">Last Name</Label>
                  <Input className="input" type="lastname" value={this.state.lastname} onChange={this.handleInputChange} name="lastname" id="lastname" placeholder="" require/>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="comments">Any Comments?</Label>
              <Input className="input" type="textarea" value={this.state.comment} name="comment" onChange={this.handleInputChange} id="exampleText" />
            </FormGroup>

            <FormGroup check row>
             <Col>
               <Button className="button" onClick={this.handleFormSubmit} >RSVP</Button>
             </Col>
             </FormGroup>

          </Form>
          </div>
        )
    }
}

export default Rsvp
